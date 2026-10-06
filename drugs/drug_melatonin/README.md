<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;melatonin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melatonin_Merchant2013_reference&quot;,&quot;label&quot;:&quot;Merchant_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melatonin/Melatonin_Merchant2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Melatonin_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melatonin/Melatonin_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# melatonin

- **generic name:** melatonin
- **ATC codes:** `N05CH01`
- **DrugBank:** [DB01065](https://go.drugbank.com/drugs/DB01065) · **PubChem:** [CID 896](https://pubchem.ncbi.nlm.nih.gov/compound/896)
- **molar mass:** 232.2783 g/mol (C13H16N2O2) — DrugBank
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Melatonin, a hormone made by the pineal gland, is used as a hypnotic for sleep problems such as jet lag, and in the EU also for sleep disorders in autism. It is widely used, with authorised products in the European Union, and is also available as a supplement and approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q180912](https://www.wikidata.org/wiki/Q180912) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| melatonin | parent | 232.278 | C13H16N2O2 | DrugBank | [896](https://pubchem.ncbi.nlm.nih.gov/compound/896) | Andersen_2016, Bechgaard_1999, Merchant_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:36 | 3:33 | 2/0/2 | 2/0/0 | 0/0/0 | 260,433/14,613 | ollama / glm-5.3-flash | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Merchant_2013_reference](drugs/drug_melatonin/Melatonin_Merchant2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Merchant NM et al., Pharmacokinetics of melatonin in preter…, British journal of clinical… (2013) | [10.1111/bcp.12092](https://doi.org/10.1111/bcp.12092) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2024_reference](drugs/drug_melatonin/Melatonin_Wang2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wang M et al., LC-MS/MS-Based Concurrent Quantificatio…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121511](https://doi.org/10.3390/pharmaceutics16121511) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Andersen_2016_reference](drugs/drug_melatonin/Melatonin_Andersen2016_reference.md) | — | 1-compartment (no model) | 4 | Andersen LP et al., Pharmacokinetics of oral and intravenou…, BMC pharmacology & toxicolo… (2016) | [10.1186/s40360-016-0052-2](https://doi.org/10.1186/s40360-016-0052-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Bechgaard_1999_reference](drugs/drug_melatonin/Melatonin_Bechgaard1999_reference.md) | — | 1-compartment (no model) | 6 | Bechgaard E et al., Intranasal absorption of melatonin in v…, International journal of ph… (1999) | [10.1016/s0378-5173(99)00019-8](https://doi.org/10.1016/s0378-5173(99)00019-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Patel_2020_Gi_cAMP_MT1](drugs/drug_melatonin/pd_Patel_2020_Gi_cAMP_MT1.md) | Gi/o-mediated cAMP production inhibition at MT1 receptor ← melatonin · direct sigmoid Emax (Hill) effect | — | Patel N et al., Structure-based discovery of potent and…, eLife 9 (2020) | [10.7554/eLife.53779](https://doi.org/10.7554/eLife.53779) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Patel_2020_Gi_cAMP_MT2](drugs/drug_melatonin/pd_Patel_2020_Gi_cAMP_MT2.md) | Gi/o-mediated cAMP production inhibition at MT2 receptor ← melatonin · direct sigmoid Emax (Hill) effect | — | Patel N et al., Structure-based discovery of potent and…, eLife 9 (2020) | [10.7554/eLife.53779](https://doi.org/10.7554/eLife.53779) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Slominski_2023_AhR](drugs/drug_melatonin/pd_Slominski_2023_AhR.md) | AhR-mediated transactivation (Human AhR Reporter Assay) ← melatonin · direct Emax (saturable) effect | — | Slominski AT et al., Melatonin and Its Metabolites Can Serve…, International journal of mo… (2023) | [10.3390/ijms242015496](https://doi.org/10.3390/ijms242015496) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Slominski_2023_PPAR](drugs/drug_melatonin/pd_Slominski_2023_PPAR.md) | PPARγ ligand-binding domain binding (TR-FRET coactivator assay) ← melatonin · direct Emax (saturable) effect | — | Slominski AT et al., Melatonin and Its Metabolites Can Serve…, International journal of mo… (2023) | [10.3390/ijms242015496](https://doi.org/10.3390/ijms242015496) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=melatonin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate, `CYP1B1` inhibitor/substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ASMT (substrate), CALM1 (target), CALR (modulator), EPX (inhibitor), ESR1 (target), IDO1 (substrate), MPO (inhibitor), MPO (substrate), MTNR1A (target), MTNR1B (target), NQO2 (inhibitor), RORB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 139 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Merchant_2013.pdf` | Merchant NM et al., Pharmacokinetics of melatonin in preter…, British journal of clinical… (2013) | popPK | 10 | [10.1111/bcp.12092](https://doi.org/10.1111/bcp.12092) | [23432339](https://pubmed.ncbi.nlm.nih.gov/23432339) | Population PK parameters for melatonin (CL 0.045 l/h, V 1.098 l, half-life 16.91 h) are reported directly in the abstract. |
| `Chan_1984.pdf` | Chan MY et al., Studies on the kinetics of melatonin an…, Journal of pineal research (1984) | popPK | 8 | [10.1111/j.1600-079x.1984.tb00214.x](https://doi.org/10.1111/j.1600-079x.1984.tb00214.x) | [6545818](https://pubmed.ncbi.nlm.nih.gov/6545818) | Rat PK study with two-compartment model and CL/V parameters, but numeric values are not given in the abstract text. |
| `Bechgaard_1999.pdf` | Bechgaard E et al., Intranasal absorption of melatonin in v…, International journal of ph… (1999) | popPK | 7 | [10.1016/s0378-5173(99)00019-8](https://doi.org/10.1016/s0378-5173(99)00019-8) | [10332069](https://pubmed.ncbi.nlm.nih.gov/10332069) | Rabbit PK study with one-compartment model, half-life ~13 min, bioavailability, Cmax and tmax reported, though CL/V values are not given numerically. |
| `Choudhary_2019.pdf` | Choudhary S et al., PK-PD based optimal dose and time for o…, Life sciences (2019) | popPK | 7 | [10.1016/j.lfs.2019.01.007](https://doi.org/10.1016/j.lfs.2019.01.007) | [30625289](https://pubmed.ncbi.nlm.nih.gov/30625289) | Preclinical PK study of melatonin in mice, but the evidence only reports Tmax; actual parameter values (CL, V, etc.) are not present and likely reside in figures/tables not provided. |

<sub>queue written 2026-10-06T21:33:29.358852+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bienert_2015 | irrelevant | 2 | 1 | Melatonin is only a premedication comparator; the PK model and parameters concern propofol, not melatonin itself. |
| popPK | Burgess_2024 | irrelevant | 0 | 0 | This is a sleep/circadian study using melatonin onset as a biomarker, with no pharmacokinetic parameters for melatonin reported. |
| popPK | Cai_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry study of melatonin derivatives as antifungal agents with no pharmacokinetic parameters for melatonin. |
| popPK | Chan_1984 | relevant | 8 | 3 | Rat PK study with two-compartment model and CL/V parameters, but numeric values are not given in the abstract text. |
| popPK | Choudhary_2019 | relevant | 7 | 2 | Preclinical PK study of melatonin in mice, but the evidence only reports Tmax; actual parameter values (CL, V, etc.) are not present and likely reside in figures/tables not provided. |
| popPK | Jellimann_1999 | irrelevant | 0 | 0 | This is a receptor-binding and bioassay study of melatonin receptor ligands, with no pharmacokinetic parameters for melatonin. |
| popPK | Kosmadopoulos_2024 | irrelevant | 0 | 0 | This is a circadian rhythm/shift-work study measuring urinary aMT6s (melatonin metabolite) phase markers, not a pharmacokinetic study; no CL, V, ka, half-life, or PK model values are reported. |
| popPK | Landagaray_2014 | irrelevant | 0 | 0 | This is a medicinal chemistry/receptor-binding study of melatonin analogues, not a pharmacokinetic study of melatonin; no disposition parameters are reported. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry/antidepressant study of paeoveitol derivatives; melatonin appears only as receptor targets (MT1/MT2), with no melatonin PK parameters reported. |
| popPK | Mukhopadhyay_2024 | irrelevant | 0 | 0 | This is a clinical efficacy trial of melatonin for cancer-related fatigue with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) reported. |
| popPK | Patel_2020 | irrelevant | 0 | 0 | This is a structure-based virtual screening/drug discovery study of melatonin receptor agonists with in vitro binding and signaling assays; no pharmacokinetic parameters (CL, V, ka, half-life, PK model) for melatonin are reported. |
| popPK | Santagostino-Barbone_2000 | irrelevant | 0 | 0 | In vitro pharmacology study of receptor ligands in guinea-pig colon; no PK disposition parameters for melatonin. |
| popPK | Slominski_2023 | irrelevant | 0 | 0 | This is an in vitro receptor-binding/reporter study of melatonin and metabolites as AhR/PPARγ agonists, with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Sugden_1994 | irrelevant | 0 | 0 | This is an in-vitro receptor binding/functional study of melatonin analogues, not a pharmacokinetic study of melatonin. |
| popPK | Swanson_2024 | irrelevant | 1 | 0 | Clinical trial using melatonin as a treatment with DLMO as an outcome; no PK disposition parameters (CL, V, ka, half-life, model) reported. |
| popPK | Zheng_2025 | irrelevant | 2 | 2 | Melatonin is only a co-administered modulator; the PK parameters reported (t1/2, Vz/F, Cmax) are for vigabatrin, not melatonin, and no numeric values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:33 UTC</sub>
