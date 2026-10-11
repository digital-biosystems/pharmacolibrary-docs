<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nelfinavir&quot;}]"></div>

# nelfinavir

- **generic name:** nelfinavir
- **ATC codes:** `J05AE04`
- **DrugBank:** [DB00220](https://go.drugbank.com/drugs/DB00220) · **PubChem:** [CID 64143](https://pubchem.ncbi.nlm.nih.gov/compound/64143)
- **molar mass:** 567.782 g/mol (C32H45N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Nelfinavir is a protease inhibitor antiviral used to treat HIV infection and AIDS. It remains an approved medicine, although its product has been withdrawn in the European Union, so its use there is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423366](https://www.wikidata.org/wiki/Q423366) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nelfinavir | parent | 567.782 | C32H45N3O4S | DrugBank | [64143](https://pubchem.ncbi.nlm.nih.gov/compound/64143) | Crommentuyn_2006, Hirt_2006, Hirt_2006_2, Jackson_2000 |
| M8 | metabolite | 583.788 | C32H45N3O5S | PubChem | [475066](https://pubchem.ncbi.nlm.nih.gov/compound/475066) | Crommentuyn_2006, Hirt_2006 |
| M8 (hydroxy-tert-butylamide) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:28 | 8:41 | 1/2/1 | 2/0/0 | 0/0/0 | 414,290/28,496 | ollama / glm-5.3-flash | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hirt_2006_2_reference](drugs/drug_nelfinavir/Nelfinavir_Hirt2006v2_reference.md) | held back | 1-compartment, oral | 5 | Hirt D et al., Age-related effects on nelfinavir and M…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.3.910-916.2006](https://doi.org/10.1128/AAC.50.3.910-916.2006) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Jackson_2000_reference](drugs/drug_nelfinavir/Nelfinavir_Jackson2000_reference.md) | — | 1-compartment (no model) | 2 | Jackson KA et al., A population pharmacokinetic analysis o…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.7.1832-1837.2000](https://doi.org/10.1128/AAC.44.7.1832-1837.2000) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Crommentuyn_2006_reference](drugs/drug_nelfinavir/Nelfinavir_Crommentuyn2006_reference.md) | — | parent + metabolite (no model) | 2 | Crommentuyn KM et al., Population pharmacokinetics and pharmac…, The Pediatric infectious di… (2006) | [10.1097/01.inf.0000215242.70300.95](https://doi.org/10.1097/01.inf.0000215242.70300.95) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hirt_2006_reference](drugs/drug_nelfinavir/Nelfinavir_Hirt2006_reference.md) | — | parent + metabolite (no model) | 6 | Hirt D et al., Pregnancy-related effects on nelfinavir…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.01596-05](https://doi.org/10.1128/AAC.01596-05) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain 20A.EU1 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_2](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_2.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain B.1.1.7 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_3](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_3.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain P.1 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gidari_2022_PFU_mL_4](drugs/drug_nelfinavir/pd_Gidari_2022_PFU_mL_4.md) | Viral titer (plaque-forming units) of SARS-CoV-2 strain B.1.617.2 ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xie_2020_Nluc_signal](drugs/drug_nelfinavir/pd_Xie_2020_Nluc_signal.md) | SARS-CoV-2-Nluc luciferase signal (relative, normalized to DMSO control) in A549-hACE2 cells ← nelfinavir · direct sigmoid Emax (Hill) effect | — | Xie X et al., A nanoluciferase SARS-CoV-2 for rapid n…, Nature communications (2020) | [10.1038/s41467-020-19055-7](https://doi.org/10.1038/s41467-020-19055-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nelfinavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inducer/substrate, `CYP2C9` inducer, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `UGT1A1` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crommentuyn_2006.pdf` | Crommentuyn KM et al., Population pharmacokinetics and pharmac…, The Pediatric infectious di… (2006) | popPK | 10 | [10.1097/01.inf.0000215242.70300.95](https://doi.org/10.1097/01.inf.0000215242.70300.95) | [16732153](https://pubmed.ncbi.nlm.nih.gov/16732153) | Population PK model of nelfinavir and M8 in children with numeric CL/F and V/F values reported directly in the abstract. |
| `Hirt_2006_2.pdf` | Hirt D et al., Age-related effects on nelfinavir and M…, Antimicrobial agents and ch… (2006) | popPK | 10 | [10.1128/AAC.50.3.910-916.2006](https://doi.org/10.1128/AAC.50.3.910-916.2006) | [16495250](https://pubmed.ncbi.nlm.nih.gov/16495250) | Population PK model for nelfinavir with numeric CL, V, ka, and M8 parameters reported directly in the abstract. |
| `Jackson_2000.pdf` | Jackson KA et al., A population pharmacokinetic analysis o…, Antimicrobial agents and ch… (2000) | popPK | 10 | [10.1128/AAC.44.7.1832-1837.2000](https://doi.org/10.1128/AAC.44.7.1832-1837.2000) | [10858338](https://pubmed.ncbi.nlm.nih.gov/10858338) | Population PK (NONMEM) of nelfinavir in HIV patients with numeric CL/F values (41.9–45.1 L/h) reported directly in the abstract. |
| `Methaneethorn_2014.pdf` | Methaneethorn J et al., Pharmacokinetic modeling of simvastatin…, Annual International Confer… (2014) | popPK | 8 | [10.1109/EMBC.2014.6944925](https://doi.org/10.1109/EMBC.2014.6944925) | [25571293](https://pubmed.ncbi.nlm.nih.gov/25571293) | Population/compartmental PK model of nelfinavir (parent-metabolite) in humans is described, but no numeric parameter values appear in the evidence. |
| `Pellegrin_2002.pdf` | Pellegrin I et al., Virologic response to nelfinavir-based…, AIDS (London, England) (2002) | popPK | 6 | [10.1097/00002030-200207050-00004](https://doi.org/10.1097/00002030-200207050-00004) | [12131209](https://pubmed.ncbi.nlm.nih.gov/12131209) | Population PK analysis of nelfinavir (Cmin, Cmax, AUC) in HIV patients is described, but no numeric parameter values (only a Cmin threshold of 1 mg/l) appear in the evidence. |

<sub>queue written 2026-10-07T17:20:28.054700+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2020 | irrelevant | 2 | 1 | This is a drug-repurposing prioritization analysis using published Cmax values and predicted lung partitioning for many drugs including nelfinavir; it reports no original PK disposition parameters (CL, V, ka, half-life with volume, or population-PK model) for nelfinavir, and numeric values largely live in supplementary tables/figures not provided. |
| popPK | Burk_2021 | irrelevant | 1 | 1 | In-vitro mechanistic study of nelfinavir's PXR interaction; no PK disposition parameters (CL, V, half-life, population-PK model) reported. |
| popPK | Chan_2013 | irrelevant | 0 | 0 | In-vitro antiviral screening study; nelfinavir is only a tested compound with no PK parameters reported. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; nelfinavir appears only as a comparator with no PK parameters for nelfinavir reported. |
| popPK | Ford_2004 | irrelevant | 3 | 4 | Non-compartmental AUC/Cmin exposure data for nelfinavir and M8 are present, but no clearance, volume, half-life, or population-PK model parameters are reported. |
| popPK | Francis_2021 | irrelevant | 0 | 0 | Nelfinavir is only a co-administered comparator affecting medroxyprogesterone acetate PK; no nelfinavir disposition parameters are reported. |
| popPK | Gaucher_2004 | irrelevant | 1 | 2 | In vitro prodrug chemistry study; only chemical hydrolysis half-lives, no PK disposition parameters for nelfinavir. |
| popPK | Gidari_2022 | irrelevant | 1 | 2 | In-vitro antiviral potency study (EC50/EC90 in Vero E6 cells) with only literature-derived Cmax ratios; no PK disposition parameters (CL, V, half-life, PK model) for nelfinavir are reported. |
| popPK | Hattori_2020 | irrelevant | 0 | 0 | In-vitro antiviral study of SARS-CoV-2 Mpro inhibitors; nelfinavir is only a comparator with EC50/cytotoxicity data, no PK parameters. |
| popPK | Methaneethorn_2014 | relevant | 8 | 3 | Population/compartmental PK model of nelfinavir (parent-metabolite) in humans is described, but no numeric parameter values appear in the evidence. |
| popPK | Millán_2005 | irrelevant | 1 | 1 | Nelfinavir is only a co-administered HAART component; the PK parameters reported are for mycophenolic acid, not nelfinavir. |
| popPK | Panhard_2007 | irrelevant | 0 | 0 | Nelfinavir appears only as a co-administered drug/covariate; the PK parameters reported are for lamivudine, stavudine and zidovudine, not nelfinavir. |
| popPK | Pellegrin_2002 | relevant | 6 | 3 | Population PK analysis of nelfinavir (Cmin, Cmax, AUC) in HIV patients is described, but no numeric parameter values (only a Cmin threshold of 1 mg/l) appear in the evidence. |
| popPK | Pfister_2002 | irrelevant | 2 | 3 | Nelfinavir is only a co-administered interacting drug; the PK model and parameters (amprenavir clearance) are for amprenavir, not nelfinavir itself. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | In vitro antiviral screening study (SARS-CoV-2-Nluc); nelfinavir is only a screened inhibitor with EC50 values, no PK disposition parameters. |
| popPK | Xu_2023 | irrelevant | 3 | 2 | This is an efficacy/clinical study of nelfinavir for COVID-19; only sparse concentration data (Cmax, C5h, trough) appear, with detailed PK values in supplementary tables not provided, and no CL/V/compartmental parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:20 UTC</sub>
