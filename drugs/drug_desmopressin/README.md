<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;desmopressin&quot;}]"></div>

# desmopressin

- **generic name:** desmopressin
- **ATC codes:** `H01BA02`
- **DrugBank:** [DB00035](https://go.drugbank.com/drugs/DB00035) · **PubChem:** not captured
- **molar mass:** 1069.22 g/mol (C46H64N14O12S2) — DrugBank
- **groups:** approved, investigational

## About

Desmopressin, a synthetic vasopressin analogue, is used to treat diabetes insipidus, bedwetting, hemophilia A, von Willebrand disease, and high blood urea levels. It is an approved medicine, appears on the WHO essential medicines list, and is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241006](https://www.wikidata.org/wiki/Q241006) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desmopressin | parent | 1069.22 | C46H64N14O12S2 | DrugBank | — | Michelet_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:11 | 2:52 | 0/0/1 | 2/2/1 | 0/0/0 | 260,214/20,099 | einfracz / qwen3.8-27b | 6 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Michelet_2016_reference](drugs/drug_desmopressin/Desmopressin_Michelet2016_reference.md) | — | 1-compartment (no model) | 1 | Michelet R et al., Effects of Food and Pharmaceutical Form…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0393-4](https://doi.org/10.1007/s40262-016-0393-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Callréus_2002_Uosm](drugs/drug_desmopressin/pd_Callr_us_2002_Uosm.md) | urine osmolarity ← desmopressin · indirect response — drug inhibits the loss of urine osmolarity | — | Callréus T et al., The influence of lithium on the antidiu…, The Journal of pharmacy and… (2002) | [10.1211/002235702320402134](https://doi.org/10.1211/002235702320402134) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Odeberg_2004_urine_osmolality](drugs/drug_desmopressin/pd_Odeberg_2004_urine_osmolality.md) | urine osmolality ← desmopressin · indirect response — drug inhibits the production of urine osmolality | — | Odeberg JM et al., A pharmacokinetic and pharmacodynamic s…, The Journal of pharmacy and… (2004) | [10.1211/0022357044535](https://doi.org/10.1211/0022357044535) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Heijdra_2022_2_VWF_Act](drugs/drug_desmopressin/pd_Heijdra_2022_2_VWF_Act.md) | Von Willebrand factor activity ← desmopressin · indirect response — drug inhibits the loss of Von Willebrand factor activity | — | Heijdra JM et al., Quantification of the relationship betw…, Haemophilia : the official… (2022) | [10.1111/hae.14582](https://doi.org/10.1111/hae.14582) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Callréus_1999_Uosm](drugs/drug_desmopressin/pd_Callr_us_1999_Uosm.md) | urine osmolarity ← desmopressin · indirect response — drug inhibits the loss of urine osmolarity | — | Callréus T et al., Indirect-response modeling of desmopres…, Journal of pharmacokinetics… (1999) | [10.1023/a:1023238514015](https://doi.org/10.1023/a:1023238514015) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Michelet_2020_osmolality](drugs/drug_desmopressin/pd_Michelet_2020_osmolality.md) | osmolality ← dDAVP · indirect response — drug inhibits the loss of osmolality | — | Michelet R et al., An Integrated Paediatric Population PK/…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00798-6](https://doi.org/10.1007/s40262-019-00798-6) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Michelet_2020_produced_urine_volume](drugs/drug_desmopressin/pd_Michelet_2020_produced_urine_volume.md) | produced urine volume ← dDAVP · indirect response — drug inhibits the loss of produced urine volume | — | Michelet R et al., An Integrated Paediatric Population PK/…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00798-6](https://doi.org/10.1007/s40262-019-00798-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=desmopressin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AVPR1A (target), AVPR1B (target), AVPR2 (target), OXTR (target), PTGS1 (inducer), PTGS2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Callréus_1999.pdf` | Callréus T et al., Indirect-response modeling of desmopres…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1023238514015](https://doi.org/10.1023/a:1023238514015) | [10948696](https://pubmed.ncbi.nlm.nih.gov/10948696) | The study reports quantitative PK parameters (CL, Vc, Vss, t1/2) for desmopressin in humans with values explicitly listed in the abstract. |
| `Dossche_2021.pdf` | Dossche L et al., Desmopressin oral lyophilisate in young…, Archives of disease in chil… (2021) | popPK | 10 | [10.1136/archdischild-2019-318225](https://doi.org/10.1136/archdischild-2019-318225) | [32737054](https://pubmed.ncbi.nlm.nih.gov/32737054) | The paper describes a pharmacokinetic study of desmopressin with relevant parameters (CL/F, Vd/F), but the specific numeric values are not present in the provided abstract text, only the covariate relationships and qualitative findings. |
| `Guillet_2025.pdf` | Guillet B et al., F8 gene variants influence the response…, Blood (2025) | popPK | 10 | [10.1182/blood.2025029829](https://doi.org/10.1182/blood.2025029829) | [40845131](https://pubmed.ncbi.nlm.nih.gov/40845131) | The study reports a population PK/PD model for Factor VIII (the target compound released by Desmopressin) with specific numeric values for clearance, AUC, and half-life-related metrics in the abstract. |
| `Michelet_2020.pdf` | Michelet R et al., An Integrated Paediatric Population PK/…, Clinical pharmacokinetics (2020) | popPK | 10 | [10.1007/s40262-019-00798-6](https://doi.org/10.1007/s40262-019-00798-6) | [31347012](https://pubmed.ncbi.nlm.nih.gov/31347012) | The paper describes a population PK/PD model for desmopressin in children, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/text evidence. |
| `Odeberg_2004.pdf` | Odeberg JM et al., A pharmacokinetic and pharmacodynamic s…, The Journal of pharmacy and… (2004) | popPK | 9 | [10.1211/0022357044535](https://doi.org/10.1211/0022357044535) | [15525445](https://pubmed.ncbi.nlm.nih.gov/15525445) | The paper is a PK/PD study of desmopressin in humans reporting two-compartmental analysis parameters, but no specific numeric values (CL, V, etc.) are present in the provided evidence text. |
| `Heijdra_2022_2.pdf` | Heijdra JM et al., Quantification of the relationship betw…, Haemophilia : the official… (2022) | popPK | 8 | [10.1111/hae.14582](https://doi.org/10.1111/hae.14582) | [35526239](https://pubmed.ncbi.nlm.nih.gov/35526239) | The study describes a population PK model for desmopressin in humans, but specific quantitative PK parameter estimates (CL, V, etc.) are not present in the provided text, focusing instead on PD parameters and simulation outcomes. |

<sub>queue written 2026-10-07T09:09:27.678990+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aldasoro_1997 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring vascular relaxation and receptor mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Callréus_2002 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (antidiuresis) and interaction with lithium, without reporting quantitative pharmacokinetic parameters like clearance or volume for desmopressin. |
| popPK | Dossche_2021 | relevant | 10 | 2 | The paper describes a pharmacokinetic study of desmopressin with relevant parameters (CL/F, Vd/F), but the specific numeric values are not present in the provided abstract text, only the covariate relationships and qualitative findings. |
| popPK | Heijdra_2017 | irrelevant | 2 | 0 | The paper is a review of von Willebrand disease management that discusses desmopressin's mechanism and general use, but it does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for desmopressin itself. |
| popPK | Heijdra_2022 | irrelevant | 2 | 0 | This is a study protocol for a future trial to validate PK models, and it does not report original quantitative PK parameter values for desmopressin itself (it models VWF/FVIII response); any existing model parameters are in unpublished or referenced external sources. |
| popPK | Heijdra_2022_2 | relevant | 8 | 2 | The study describes a population PK model for desmopressin in humans, but specific quantitative PK parameter estimates (CL, V, etc.) are not present in the provided text, focusing instead on PD parameters and simulation outcomes. |
| popPK | Juul_2013 | irrelevant | 1 | 0 | The study reports PK/PD delay and effect variability but lacks quantitative compartmental PK parameters (clearance, volume, half-life) for desmopressin. |
| popPK | Michelet_2018 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic parameters (IC50, urine osmolality) and qualitative PK/PD modeling, without reporting specific numeric PK disposition parameters (CL, V, t1/2) for desmopressin. |
| popPK | Michelet_2020 | relevant | 10 | 2 | The paper describes a population PK/PD model for desmopressin in children, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/text evidence. |
| popPK | Odeberg_2004 | relevant | 9 | 0 | The paper is a PK/PD study of desmopressin in humans reporting two-compartmental analysis parameters, but no specific numeric values (CL, V, etc.) are present in the provided evidence text. |
| popPK | Patel_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacological activity of a new peptide (METx) using desmopressin only as a comparator in receptor binding assays, with no pharmacokinetic parameters reported. |
| popPK | Preijers_2019 | irrelevant | 2 | 0 | The paper is a review of dosing strategies and PK models but does not present original quantitative PK parameter values for desmopressin in the provided text. |
| popPK | Preijers_2021 | relevant | 5 | 0 | This is a review that discusses population PK models for desmopressin (measuring FVIII response) but does not provide the numeric desmopressin parameter values in the text, which are likely in the excluded supplementary material. |
| popPK | Yen_2025 | irrelevant | 3 | 0 | The study applies an existing PK/PD model to simulate dosing recommendations but does not report original quantitative PK parameter estimates (e.g., CL, V, ka) for desmopressin itself. |
| popPK | de_2020 | irrelevant | 3 | 2 | The study models the PK of von Willebrand factor (VWF), a biomarker/probe, not the disposition parameters (CL, V, t1/2) of the drug desmopressin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:09 UTC</sub>
