<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;fingolimod&quot;}]"></div>

# fingolimod

- **generic name:** fingolimod
- **ATC codes:** `L04AA27`, `L04AE01`
- **DrugBank:** [DB08868](https://go.drugbank.com/drugs/DB08868) · **PubChem:** [CID 107970](https://pubchem.ncbi.nlm.nih.gov/compound/107970)
- **molar mass:** 307.4708 g/mol (C19H33NO2) — DrugBank
- **groups:** approved, investigational

## About

Fingolimod is an immunosuppressant used to treat multiple sclerosis, including relapsing-remitting forms. It is authorised in the European Union and widely used as a treatment for multiple sclerosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425137](https://www.wikidata.org/wiki/Q425137) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:04 | 0:44 | 0/0/0 | 0/1/0 | 0/0/0 | 54,967/2,543 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2013_peripheral_lymphocyte_counts_at_SS](drugs/drug_fingolimod/pd_Lee_2013_peripheral_lymphocyte_counts_at_SS.md) | peripheral lymphocyte counts at SS ← fingolimod phosphate · direct sigmoid Emax (Hill) effect | — | Lee JY et al., Use of a biomarker in exposure-response…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.44](https://doi.org/10.1038/psp.2013.44) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fingolimod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inducer/inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inducer/inhibitor | DrugBank actor |
| metabolism | kidney | `CYP4F2` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP2E1` substrate, `CYP4F2` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DRD3 (target), HDAC1 (inhibitor), S1PR1 (modulator), S1PR3 (modulator), S1PR4 (modulator), S1PR5 (modulator), SLC1A2 (inducer), SLC1A3 (inducer), SPHK1 (inhibitor), SPHK1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Papakyriakopoulou_2024.pdf` | Papakyriakopoulou P et al., Pharmacokinetic Study of Fingolimod Nas…, Pharmaceutical research (2024) | popPK | 9 | [10.1007/s11095-024-03745-8](https://doi.org/10.1007/s11095-024-03745-8) | [39470941](https://pubmed.ncbi.nlm.nih.gov/39470941) | The study reports quantitative non-compartmental PK parameters (Cmax, bioavailability) for fingolimod in mice, but compartmental parameters like CL, V, and ka are not explicitly listed in the text. |
| `Wu_2012.pdf` | Wu K et al., Population pharmacokinetics of fingolim…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011409229](https://doi.org/10.1177/0091270011409229) | [22110161](https://pubmed.ncbi.nlm.nih.gov/22110161) | The paper describes a population PK model for fingolimod phosphate, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Taylor_2012.pdf` | Taylor S et al., The utility of pharmacokinetic-pharmaco…, Xenobiotica; the fate of fo… (2012) | popPK | 5 | [10.3109/00498254.2011.645908](https://doi.org/10.3109/00498254.2011.645908) | [22225501](https://pubmed.ncbi.nlm.nih.gov/22225501) | The paper describes a PK-PD modeling approach in rats for S1P(1) agonists but provides no quantitative fingolimod PK parameter values in the evidence. |

<sub>queue written 2026-10-07T00:03:51.338617+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakker_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of TRV045, not fingolimod, which is only mentioned as a comparator/context for S1P modulation. |
| popPK | David_2012 | irrelevant | 2 | 1 | The paper is a narrative review summarizing general PK properties (bioavailability, half-life) but does not report specific quantitative population PK parameter estimates (CL, V, Q) required for extraction. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study focuses on brain atrophy outcomes in multiple sclerosis using MRI and does not report pharmacokinetic parameters for fingolimod. |
| popPK | Jin_2014 | irrelevant | 0 | 0 | The paper studies the S1P1 agonist Syl948, using fingolimod only as a comparative reference agent without reporting fingolimod PK parameters. |
| popPK | Lee_2013 | irrelevant | 3 | 1 | This is a pharmacodynamic exposure-response analysis using fingolimod phosphate concentrations to predict clinical endpoints (relapse rate) and biomarker response (lymphocyte counts), but it does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for fingolimod. |
| popPK | Maceski_2025 | irrelevant | 0 | 0 | The paper investigates serum biomarkers (GFAP and NfL) as predictors of disease progression in MS patients treated with fingolimod, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for fingolimod. |
| popPK | OSullivan_2015 | irrelevant | 0 | 0 | The study focuses on the mechanism of action and protective effects of fingolimod against psychosine-induced injury in cells and tissues, not on pharmacokinetic disposition parameters. |
| popPK | Papakyriakopoulou_2024 | relevant | 9 | 3 | The study reports quantitative non-compartmental PK parameters (Cmax, bioavailability) for fingolimod in mice, but compartmental parameters like CL, V, and ka are not explicitly listed in the text. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study investigates the effect of fingolimod on the humoral immune response to a vaccine, not pharmacokinetic parameters. |
| popPK | Rauma_2020 | irrelevant | 0 | 0 | The study reports lipid profile changes (pharmacodynamics/adverse effects) rather than pharmacokinetic parameters like clearance or volume for fingolimod. |
| popPK | Rüger_2014 | irrelevant | 0 | 0 | The paper investigates the immunomodulatory effects and signaling pathways of fingolimod in immune cells (in vitro/mechanistic), not its pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Taylor_2012 | irrelevant | 5 | 0 | The paper describes a PK-PD modeling approach in rats for S1P(1) agonists but provides no quantitative fingolimod PK parameter values in the evidence. |
| popPK | Valentine_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization and mechanism of action of FTY720 analogues, reporting receptor binding affinities (EC50, Ki) rather than population pharmacokinetic parameters for fingolimod. |
| popPK | Wu_2012 | relevant | 9 | 0 | The paper describes a population PK model for fingolimod phosphate, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | You_2021 | irrelevant | 0 | 0 | The paper is a neuro-ophthalmology study analyzing retinal nerve fiber layer loss in MS patients treated with various drugs, including fingolimod, but contains no pharmacokinetic data or models. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
