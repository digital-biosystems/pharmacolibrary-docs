<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;taurolidine&quot;}]"></div>

# taurolidine

- **generic name:** taurolidine
- **ATC codes:** `B05CA05`
- **DrugBank:** [DB12473](https://go.drugbank.com/drugs/DB12473) · **PubChem:** [CID 29566](https://pubchem.ncbi.nlm.nih.gov/compound/29566)
- **molar mass:** 284.35 g/mol (C7H16N4O4S2) — DrugBank
- **groups:** approved, investigational

## About

Taurolidine is an anti-infective agent used as an irrigating solution, and has also been investigated as an antineoplastic drug. It is an approved medicine, though not authorised centrally in the European Union, and is used only in limited settings such as irrigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3981568](https://www.wikidata.org/wiki/Q3981568) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:50 | 1:45 | 0/0/0 | 1/0/0 | 0/0/0 | 80,098/1,254 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/6 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Lv_2023_Inhibition_rate](drugs/drug_taurolidine/pd_Lv_2023_Inhibition_rate.md) | Inhibition rate of TRD against influenza virus H5N1 ← Taurolidine · direct sigmoid Emax (Hill) effect | — | Lv C et al., Taurolidine improved protection against…, Virologica Sinica (2023) | [10.1016/j.virs.2022.11.010](https://doi.org/10.1016/j.virs.2022.11.010) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gong_2007.pdf` | Gong L et al., The pharmacokinetics of taurolidine met…, Journal of clinical pharmac… (2007) | popPK | 9 | [10.1177/0091270007299929](https://doi.org/10.1177/0091270007299929) | [17395893](https://pubmed.ncbi.nlm.nih.gov/17395893) | The study reports the pharmacokinetics of taurolidine's metabolites (taurultam and taurinamide) in humans, which is relevant, but the specific numeric parameter values are not present in the provided evidence text. |
| `Stendel_2007.pdf` | Stendel R et al., Pharmacokinetics of taurolidine followi…, Clinical pharmacokinetics (2007) | popPK | 9 | [10.2165/00003088-200746060-00005](https://doi.org/10.2165/00003088-200746060-00005) | [17518510](https://pubmed.ncbi.nlm.nih.gov/17518510) | The study reports PK parameters for taurolidine in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative descriptions. |

<sub>queue written 2026-10-06T00:49:07.254415+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Braumann_2004 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on protein synthesis inhibition and does not report any pharmacokinetic parameters for taurolidine. |
| popPK | Chromik_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell death induction and does not report any pharmacokinetic parameters for taurolidine. |
| popPK | Darnowski_2004 | irrelevant | 0 | 0 | The paper is a mechanistic and antineoplastic study focusing on cytotoxicity and apoptosis, with no pharmacokinetic parameters reported. |
| popPK | Dofferhoff_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endotoxin binding and TNF production, not a pharmacokinetic study, and reports no disposition parameters for taurolidine. |
| PD | Dofferhoff_1993 | not_relevant | 1 | 0 | The paper mentions taurolidine qualitatively as preventing TNF rise via endotoxin neutralization but provides no numeric concentration-effect data, dose-response curve, or PD parameters for taurolidine. |
| popPK | Eschenburg_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on neuroblastoma cell lines and does not report pharmacokinetic parameters for taurolidine. |
| popPK | Gong_2007 | relevant | 9 | 2 | The study reports the pharmacokinetics of taurolidine's metabolites (taurultam and taurinamide) in humans, which is relevant, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Görtz_1997 | irrelevant | 0 | 0 | The paper reports clinical outcomes (lethality rate) of taurolidine use in intra-abdominal infections but contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study investigates the immunological mechanism of taurolidine (autophagy induction) in sepsis, not its pharmacokinetic disposition parameters. |
| popPK | Lv_2023 | irrelevant | 0 | 0 | The study is a mechanistic antiviral efficacy study in mice and cell cultures, reporting no pharmacokinetic parameters (CL, V, etc.) for taurolidine. |
| popPK | Martinotti_2011 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity screening of drug combinations and does not report any pharmacokinetic parameters for taurolidine. |
| popPK | Nguyen_2024 | irrelevant | 0 | 0 | The paper is a clinical review of taurolidine as a catheter lock solution and explicitly states that limited pharmacokinetic data are available, providing no quantitative PK parameters. |
| PD | Nguyen_2024 | not_relevant | 1 | 0 | The text is a review/summary that explicitly states limited PK/PD data are available and only reports clinical efficacy (risk reduction) without any numeric concentration-effect or dose-response parameters. |
| popPK | Nici_2004 | irrelevant | 0 | 0 | The study is an in-vitro and in-vivo efficacy/toxicology study reporting IC50 and tumor reduction, not a pharmacokinetic study with disposition parameters. |
| popPK | Rimann_2014 | irrelevant | 0 | 0 | The study is an in vitro mechanistic/cytotoxicity assay (IC50) and does not report pharmacokinetic parameters for taurolidine. |
| popPK | Rodak_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of taurolidine's antineoplastic activity and cell death mechanisms, reporting no pharmacokinetic parameters. |
| popPK | Savarese_2024 | irrelevant | 0 | 0 | The study is a clinical feasibility trial of taurolidine lock therapy for catheter-related infections and does not report any pharmacokinetic parameters. |
| popPK | Schubert_2020 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo feasibility study on foam-based drug delivery and cytotoxicity, reporting no pharmacokinetic parameters (CL, V, etc.) for taurolidine. |
| PD | Schubert_2020 | not_relevant | 2 | 1 | The paper reports qualitative cytotoxicity comparisons and penetration depths for a foam carrier but does not provide numeric concentration-effect curves or PD parameters (e.g., EC50, Emax) for taurolidine. |
| popPK | Shrayer_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on melanoma cells reporting IC50 and apoptosis data, not a pharmacokinetic study with disposition parameters. |
| popPK | Stendel_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating apoptosis in cell lines and does not report any pharmacokinetic parameters. |
| popPK | Stendel_2007 | relevant | 9 | 2 | The study reports PK parameters for taurolidine in humans, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative descriptions. |
| popPK | Wouters_2022 | irrelevant | 0 | 0 | The study investigates the immunological effects of taurolidine on leukocytes and does not report any pharmacokinetic parameters. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract and contains no data, results, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
