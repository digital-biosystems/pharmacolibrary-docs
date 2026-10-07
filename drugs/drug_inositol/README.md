<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;inositol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inositol_Phelps2016_reference&quot;,&quot;label&quot;:&quot;Phelps_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_inositol/Inositol_Phelps2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# inositol

- **generic name:** inositol
- **ATC codes:** `A11HA07`
- **DrugBank:** [DB13178](https://go.drugbank.com/drugs/DB13178) · **PubChem:** not captured
- **molar mass:** 180.1559 g/mol (C6H12O6) — DrugBank
- **groups:** approved, withdrawn

## About

Inositol is a sugar-like compound once classed as a B vitamin and marketed as a vitamin preparation. It is no longer regarded as an essential vitamin and has been withdrawn as a drug, though it persists as a dietary supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407997](https://www.wikidata.org/wiki/Q407997) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| inositol | parent | 180.156 | C6H12O6 | DrugBank | — | Antonowski_2022, Phelps_2013, Phelps_2016 |
| myo-inositol | parent | 180.156 | C6H12O6 | DrugBank | — | Antonowski_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:36 | 2:46 | 1/1/2 | 0/0/1 | 0/0/0 | 220,332/10,421 | einfracz / qwen3.8-27b | 9 | 1/8 | 9/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Phelps_2016_reference](drugs/drug_inositol/Inositol_Phelps2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Phelps DL et al., Safety and pharmacokinetics of multiple…, Pediatric research (2016) | [10.1038/pr.2016.97](https://doi.org/10.1038/pr.2016.97) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Phelps_2013_covariate_estimate_standard_error](drugs/drug_inositol/Inositol_Phelps2013_covariate_estimate_standard_error.md) | — | 1-compartment (no model) | 1 | Phelps DL et al., Pharmacokinetics and safety of a single…, Pediatric research (2013) | [10.1038/pr.2013.162](https://doi.org/10.1038/pr.2013.162) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q367 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Phelps_2013_estimate](drugs/drug_inositol/Inositol_Phelps2013_estimate.md) | — | 1-compartment (no model) | 6 | Phelps DL et al., Pharmacokinetics and safety of a single…, Pediatric research (2013) | [10.1038/pr.2013.162](https://doi.org/10.1038/pr.2013.162) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Antonowski_2022_reference](drugs/drug_inositol/Inositol_Antonowski2022_reference.md) | — | 1-compartment (no model) | 7 | Antonowski T et al., Pharmacokinetics of, International journal of mo… (2022) | [10.3390/ijms231911246](https://doi.org/10.3390/ijms231911246) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Taghizadeh_2022_IP1](drugs/drug_inositol/pd_Taghizadeh_2022_IP1.md) | IP1 ← inositol phosphate · direct Emax (saturable) effect | model (no simulator) | Taghizadeh MS et al., Discovery of the cyclotide caripe 11 as…, Scientific reports (2022) | [10.1038/s41598-022-13142-z](https://doi.org/10.1038/s41598-022-13142-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=inositol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: APP (inhibitor), SLC5A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1137 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berg_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacological analysis of serotonin receptor signaling and does not measure pharmacokinetic parameters for inositol. |
| popPK | Charney_2020 | irrelevant | 0 | 0 | The study measures myo-inositol concentration as a neurochemical biomarker via MRS in the brain, not as a drug with pharmacokinetic parameters (CL, V, ka). |
| popPK | Hager_1995 | irrelevant | 0 | 0 | The study characterizes the kinetic properties (K0.5, Hill coefficient) of a transporter in Xenopus oocytes, which is an in-vitro mechanistic study rather than a pharmacokinetic study of inositol disposition in a biological system. |
| popPK | Hirata_1997 | irrelevant | 0 | 0 | The study investigates the potency of inositol 1,4,5-trisphosphate (InsP3) receptor ligands on calcium release in cell lines, which is a pharmacodynamic/mechanistic study, not a pharmacokinetic study of inositol disposition. |
| popPK | Leppink_2017 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for trichotillomania and does not report any pharmacokinetic parameters for inositol. |
| popPK | Lowe_2022 | irrelevant | 0 | 0 | The study uses myo-inositol as a biomarker in proton magnetic resonance spectroscopy (1H-MRS) for Huntington's disease, not as a pharmacokinetic subject. |
| popPK | Lu_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor antagonism and does not report pharmacokinetic parameters for inositol. |
| popPK | Matskevitch_1998 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of transporter kinetics in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | McKenna_2023 | irrelevant | 0 | 0 | The study is a neuroimaging analysis of psychotic disorders where inositol is a metabolite measured by MRS, not a drug subject to PK modeling. |
| popPK | Perelló_2024 | irrelevant | 2 | 2 | The study measures hexasodium fytate (inositol hexaphosphate) for cardiovascular effects and reports only sparse Cmax data, lacking the specific clearance, volume, or compartmental PK parameters required. |
| popPK | Považan_2020 | irrelevant | 0 | 0 | This is a brain MR spectroscopy study quantifying static metabolite concentrations (including myo-inositol) in healthy participants, not a pharmacokinetic study reporting disposition parameters for inositol as a drug. |
| popPK | Rolnik_2022 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of vascular resistance and oxidative stress using myo-inositol, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Roy_2025 | irrelevant | 0 | 0 | This is a metabolic flux analysis study in an ALS mouse model, not a pharmacokinetic study reporting clearance or volume of distribution for inositol. |
| popPK | Taghizadeh_2022 | irrelevant | 0 | 0 | The paper is a pharmacological study on cyclotides acting on the CCK2 receptor, using inositol phosphate (IP1) as a signaling readout, not a pharmacokinetic study of the drug inositol. |
| popPK | Tegge_1991 | irrelevant | 0 | 0 | This is a chemical synthesis and in-vitro mechanistic study of inositol phosphates, not a pharmacokinetic study. |
| popPK | Voevodskaya_2019 | irrelevant | 0 | 0 | The study uses myo-inositol as a biomarker in MRS for Alzheimer's pathology, not as a subject drug for pharmacokinetic analysis, and reports no disposition parameters (CL, V, ka). |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper studies orexin receptor agonists, and inositol is only mentioned as a component of the in vitro assay (inositol phosphate accumulation), not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:34 UTC</sub>
