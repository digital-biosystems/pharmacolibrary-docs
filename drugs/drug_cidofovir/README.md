<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;cidofovir&quot;}]"></div>

# cidofovir

- **generic name:** cidofovir
- **ATC codes:** `J05AB12`
- **DrugBank:** [DB00369](https://go.drugbank.com/drugs/DB00369) · **PubChem:** [CID 60613](https://pubchem.ncbi.nlm.nih.gov/compound/60613)
- **molar mass:** 279.187 g/mol (C8H14N3O6P) — DrugBank
- **groups:** approved, investigational

## About

Cidofovir is an antiviral drug used to treat cytomegalovirus retinitis. It is an approved medicine but is used only in a narrow, specialist setting, mainly for cytomegalovirus retinitis in patients who cannot take other antivirals, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423445](https://www.wikidata.org/wiki/Q423445) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:25 | 1:22 | 0/0/0 | 1/0/0 | 0/0/0 | 86,200/3,389 | ollama / glm-5.3-flash | 13 | 2/9 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hamilton_2020_HCMV_replication_in_TEV_1_trophoblast_cells_at_7_dpi](drugs/drug_cidofovir/pd_Hamilton_2020_HCMV_replication_in_TEV_1_trophoblast_cells_at.md) | HCMV replication in TEV-1 trophoblast cells at 7 dpi ← cidofovir · inhibition effect | — | Hamilton ST et al., Investigational Antiviral Therapy Model…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01627-20](https://doi.org/10.1128/AAC.01627-20) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cidofovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TYMP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 187 matched, 79 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cundy_1996.pdf` | Cundy KC et al., Pharmacokinetics of cidofovir in monkey…, Drug metabolism and disposi… (1996) | popPK | 10 | not captured | [8818570](https://pubmed.ncbi.nlm.nih.gov/8818570) | Full PK parameters (CL, half-lives, bioavailability) for cidofovir in monkeys are present in the abstract. |
| `Neant_2018.pdf` | Neant N et al., Model of population pharmacokinetics of…, The Journal of antimicrobia… (2018) | popPK | 10 | [10.1093/jac/dky192](https://doi.org/10.1093/jac/dky192) | [29860512](https://pubmed.ncbi.nlm.nih.gov/29860512) | A population PK model of cidofovir in children is described, but numeric CL/V/parameter estimates are not in the abstract (likely in tables/supplement); only AUC values appear. |

<sub>queue written 2026-10-07T15:24:49.370292+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altmann_2012 | irrelevant | 0 | 0 | This is an antiviral efficacy/synergy study of mitoxantrone with cidofovir in mice; no PK disposition parameters for cidofovir are reported. |
| PGx | Aydamirov_2023 | not_relevant | 0 | 0 | In vitro antiviral efficacy study with no gene variant/genotype/phenotype effects on cidofovir PK or PD parameters. |
| popPK | Babaev_2022 | irrelevant | 0 | 0 | This is a chemistry/antiviral activity study of triterpenoid derivatives; cidofovir is only mentioned as a comparator standard, with no PK parameters reported. |
| popPK | Beadle_2006 | irrelevant | 0 | 0 | In-vitro antiviral potency study; cidofovir esters only appear as activity comparators (EC50), with no PK disposition parameters. |
| popPK | Bedard_1999 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility assay; cidofovir is only a positive-control compound with EC50 values, no PK disposition parameters. |
| PGx | Bhattacharjee_2024 | not_relevant | 0 | 0 | In silico docking/repurposing study with no gene variant effects on cidofovir PK/PD parameters. |
| popPK | Bonvicini_2015 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/EC90) with no pharmacokinetic disposition parameters for cidofovir. |
| PGx | Borthwick_2005 | not_relevant | 0 | 0 | Paper describes HCMV protease inhibitor design; no pharmacogenomic effects on cidofovir PK/PD reported. |
| popPK | Bravo_2011 | irrelevant | 2 | 0 | This is an efficacy study of a cidofovir analog in guinea pigs with no PK disposition parameters (CL, V, half-life) reported; only EC50 and dosing regimens appear. |
| popPK | Bua_2019 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/CC50) with no pharmacokinetic disposition parameters for cidofovir. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | In vitro antiviral activity review reporting EC50 values, not pharmacokinetic disposition parameters for cidofovir. |
| PGx | Cherrier_2018 | not_relevant | 5 | 5 | Viral resistance mutations (UL54 L516P) affect cidofovir antiviral efficacy, not a host pharmacogenomic effect on a PK/PD parameter. |
| popPK | Chou_2021 | irrelevant | 0 | 0 | In vitro antiviral susceptibility (EC50) study of viral mutants, not a pharmacokinetic study of cidofovir disposition. |
| popPK | Drouot_2016 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study with EC50 values only; no PK disposition parameters for cidofovir. |
| popPK | Fryer_2004 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility study reporting EC50 values, not pharmacokinetic disposition parameters for cidofovir. |
| popPK | Gentry_2015 | irrelevant | 0 | 0 | This is a virology resistance-mechanism study with no pharmacokinetic parameters for cidofovir, which is only mentioned as a comparator. |
| popPK | Gosert_2011 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50/CC50) of CMX001, a cidofovir derivative, with no PK disposition parameters. |
| PGx | Hakki_2011 | not_relevant | 3 | 2 | Review abstract only mentions viral UL54 mutations conferring cidofovir resistance qualitatively, with no PK/PD parameter effects or fitted effect sizes. |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | In vitro/ex vivo antiviral efficacy study (EC50 values), no PK disposition parameters for cidofovir. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | In-vitro antiviral/cytotoxicity study of tecovirimat vs MPXV; cidofovir is only a comparator with EC50/cytotoxicity values, no PK disposition parameters. |
| PGx | Huber_2012 | not_relevant | 2 | 1 | Review of ocular adverse effects; cidofovir mentioned only qualitatively (inflammation, ocular pressure) with no pharmacogenomic effect on PK/PD parameters. |
| PGx | Huber_2012_2 | not_relevant | 1 | 0 | Cidofovir ocular toxicity mentioned without any pharmacogenomic effect on PK/PD parameters; voriconazole CYP mention is vague and not cidofovir. |
| popPK | Jesus_2009 | irrelevant | 0 | 0 | In vitro antiviral efficacy study (EC50) with no pharmacokinetic disposition parameters for cidofovir. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50/CC50) with no pharmacokinetic disposition parameters for cidofovir. |
| PGx | Koepf_2020 | not_relevant | 0 | 0 | Viral UL97 mutation confers ganciclovir resistance, not a host pharmacogenomic effect on cidofovir PK/PD. |
| popPK | Kornii_2019 | irrelevant | 0 | 0 | In-vitro antiviral activity study; cidofovir is only a comparator, no PK parameters reported. |
| popPK | Ledbetter_2015 | irrelevant | 2 | 0 | Efficacy/toxicity study of topical cidofovir in dogs; no PK disposition parameters (CL, V, half-life) reported anywhere in the evidence. |
| popPK | Lloyd_2022 | irrelevant | 1 | 0 | This is an antiviral efficacy study of a cidofovir prodrug (USC-373) in cells and mice; no PK disposition parameters (CL, V, half-life, or PK model) for cidofovir are reported. |
| popPK | Loddo_2014 | irrelevant | 0 | 0 | Cidofovir is only used as a reference/comparator drug in in-vitro antiviral assays; no PK parameters are reported. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This is a systematic review of antibiotic PK in obesity; cidofovir is not mentioned at all, and no cidofovir parameters appear. |
| popPK | Meerbach_1998 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study; cidofovir is only a reference compound with EC50 values, no PK parameters. |
| PGx | Mehta_2021 | not_relevant | 2 | 3 | Reports UL97/UL54 resistance mutations and CDV toxicities/outcomes, but no gene variant effect on a PK/PD parameter of cidofovir. |
| popPK | Neant_2018 | relevant | 10 | 3 | A population PK model of cidofovir in children is described, but numeric CL/V/parameter estimates are not in the abstract (likely in tables/supplement); only AUC values appear. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50 values), no pharmacokinetic disposition parameters for cidofovir. |
| PGx | Ng_2017 | not_relevant | 3 | 1 | Review of leflunomide (not cidofovir) mentions genetic polymorphisms affecting PK only qualitatively, with no fitted effect sizes. |
| popPK | Olson_2014 | irrelevant | 0 | 0 | In vitro efficacy study of brincidofovir with EC50 values only; no PK disposition parameters for cidofovir. |
| PGx | Orlando_2002 | not_relevant | 0 | 0 | Clinical efficacy study of cidofovir in genital warts with no gene variant/genotype effects on PK or PD parameters. |
| popPK | Patil_2017 | irrelevant | 0 | 0 | Cidofovir is only a comparator with EC50 potency values; no pharmacokinetic parameters are reported. |
| popPK | Quenelle_2007 | irrelevant | 0 | 0 | Cidofovir is only an in vitro comparator (EC50 values), with no PK disposition parameters for cidofovir. |
| PGx | Richardson_2021 | not_relevant | 0 | 0 | Clinical pilot of brincidofovir efficacy in HPV laryngeal disease; no gene variant effects on PK/PD parameters reported. |
| popPK | Romanowski_2021 | irrelevant | 0 | 0 | In vitro EC50 antiviral potency study; cidofovir is only a positive control, no PK disposition parameters (CL, V, half-life, model) reported. |
| popPK | Romanowski_2021_2 | irrelevant | 0 | 0 | This is an antiviral efficacy study of filociclovir with cidofovir only as a comparator; no PK parameters (CL, V, half-life, model) for cidofovir are reported. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | This is a population PK study of maribavir; cidofovir is only mentioned as a prior failed therapy, with no cidofovir PK parameters. |
| popPK | Tollefson_2022 | irrelevant | 0 | 0 | In-vitro antiviral potency study where cidofovir is only a comparator; no PK parameters reported. |
| popPK | Vogel_2002 | irrelevant | 0 | 0 | Cidofovir is only a resistance comparator for EDDS; no PK parameters for cidofovir are reported. |
| popPK | Zhang_2025 | irrelevant | 3 | 2 | This is an antiviral efficacy/drug-discovery study of BCV/HPMPA prodrugs; PK data (Fig. 1d–g, supplementary Fig. 5) are concentration-time profiles in figures not provided, with no numeric CL/V/half-life values in the evidence. |
| PGx | von_2023 | not_relevant | 2 | 3 | Paper describes an NGS assay for detecting CMV resistance mutations (viral genomics), not a host pharmacogenomic effect on cidofovir PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
