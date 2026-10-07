<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;flutamide&quot;}]"></div>

# flutamide

- **generic name:** flutamide
- **ATC codes:** `L02BB01`
- **DrugBank:** [DB00499](https://go.drugbank.com/drugs/DB00499) · **PubChem:** [CID 3397](https://pubchem.ncbi.nlm.nih.gov/compound/3397)
- **molar mass:** 276.2118 g/mol (C11H11F3N2O3) — DrugBank
- **groups:** approved, investigational

## About

Flutamide is an antiandrogen drug used to treat prostate cancer. It is an approved medicine, though it carries a boxed warning, and is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418669](https://www.wikidata.org/wiki/Q418669) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:14 | 0:51 | 0/0/0 | 0/0/0 | 0/0/0 | 95,121/1,766 | einfracz / qwen3.8-27b | 6 | 2/4 | 5/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flutamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: AHR (target), NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babica_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endocrine disruptors on signaling pathways where flutamide is used only as a receptor modulator, not as the subject of pharmacokinetic analysis. |
| popPK | Demaegdt_2016 | irrelevant | 0 | 0 | Flutamide is used only as a reference compound for anti-androgenic potency in an in-vitro receptor assay, with no pharmacokinetic parameters measured. |
| popPK | Di_2016 | irrelevant | 0 | 0 | The study reports in vitro receptor activity (IC50) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Fabian_2019 | irrelevant | 2 | 2 | This is a PBTK modeling study for risk assessment of 10 endocrine disruptors in rats, not a specific pharmacokinetic parameter study for flutamide, and it lacks explicit final PK parameter values (CL, V, t1/2) for flutamide in the provided text. |
| popPK | Haeba_2008 | irrelevant | 0 | 0 | The study is an ecotoxicological investigation of endocrine disruption effects in *Daphnia magna*, not a pharmacokinetic study reporting disposition parameters for flutamide. |
| popPK | Karanian_1996 | irrelevant | 0 | 0 | This is a physiological study on vascular contractility in dogs where flutamide is used as a pharmacological agent, not a pharmacokinetic study. |
| popPK | Leihy_2001 | irrelevant | 0 | 0 | The study is a developmental biology/mechanism study in wallabies where flutamide is used only as an antagonist to block virilization, not a PK study of flutamide. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on the cytotoxicity and endocrine-disrupting effects of disinfection byproducts, using flutamide only as a reference compound for calculating the flutamide equivalent factor (FEF), with no pharmacokinetic parameters reported. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The paper reports in vitro transcriptional activation assays (antagonist activity) for flutamide and UV filters, not pharmacokinetic disposition parameters. |
| popPK | Narayan_1996 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for benign prostatic hyperplasia and does not report pharmacokinetic parameters. |
| popPK | Prior_2014 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study on mitochondrial function and hypoxia, where flutamide is used only as a negative control anti-androgen, with no pharmacokinetic parameters reported. |
| popPK | Riegraf_2022 | irrelevant | 0 | 0 | The study is an in-vitro bioassay method for detecting anti-androgenicity in environmental samples and does not report pharmacokinetic parameters for flutamide. |
| popPK | Roelofs_2014 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study assessing androgen receptor antagonism of fungicides, where flutamide is used only as a positive control and not as the subject drug for pharmacokinetic analysis. |
| popPK | Ruamyod_2017 | irrelevant | 0 | 0 | This is an in vitro electrophysiology study investigating testosterone effects on ion channels, where flutamide is used only as an antagonist tool, with no pharmacokinetic parameters reported. |
| popPK | Sarrabay_2015 | irrelevant | 0 | 0 | The paper is a toxicological study focused on mode of action and dose-response for endocrine toxicity, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Schneider_2017 | irrelevant | 0 | 0 | The study is a toxicological/developmental assessment of anti-androgenic effects in rats and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Sonneveld_2005 | irrelevant | 0 | 0 | The study describes an in-vitro bioassay for receptor binding/antagonism and does not report pharmacokinetic disposition parameters for flutamide. |
| popPK | Zacharia_2017 | irrelevant | 0 | 0 | The paper is a toxicological assessment calculating Permitted Daily Exposure (PDE) based on NOAELs from toxicity studies, and does not report quantitative pharmacokinetic parameters (CL, V, Ka, etc.) for flutamide. |
| popPK | Zhang_1999 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (prostate weight/volume) and contains no pharmacokinetic parameters. |
| popPK | van_2022 | relevant | 5 | 0 | The study develops a human PBK model for flutamide and hydroxyflutamide and validates it against literature PK data, but specific numerical disposition parameters (CL, V, Q) for flutamide are not explicitly listed in the provided text, likely residing in the referenced Table 1 or supplementary files. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
