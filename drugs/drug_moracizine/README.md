<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;moracizine&quot;}]"></div>

# moracizine

- **generic name:** moracizine
- **ATC codes:** `C01BG01`
- **DrugBank:** [DB00680](https://go.drugbank.com/drugs/DB00680)
- **groups:** approved, withdrawn

## About

**Description.** An antiarrhythmia agent used primarily for ventricular rhythm disturbances.

**Indication.** Used to treat irregular heartbeats (arrhythmias) and maintain a normal heart rate.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 16:34 | 1:10 | 0/0/0 | 0/0/0 | 0/0/0 | 13,253/1,212 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moracizine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…ed, absorption is complete within 2 to 3 hours. Significant first-pass metabolism results…”</sub> | prose |
| metabolism | liver | <sub>“…Hepatic and extensive, to at least 26 metabolites, none accounting…”</sub> | prose |
| excretion | bile duct | <sub>“…proximately 56% of the administered dose is excreted in the feces and 39% is excreted in t…”</sub> | prose |
| excretion | kidney | <sub>“…orally administered Ethmozine® is excreted unchanged in the urine. Approximately 56% of th…”</sub> | prose |

<sub>Actors without a tissue in the table: SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_1993.pdf` | Guo WY et al., [Pharmacokinetics of moracizine and mor…, Zhongguo yao li xue bao = A… (1993) | popPK | 8 | not captured | [8010035](https://pubmed.ncbi.nlm.nih.gov/8010035) | The paper reports quantitative PK parameters (Cmax, T1/2) for moracizine in humans, but lacks explicit clearance (CL) or volume (V) values. |
| `Mannhold_1990.pdf` | Mannhold R et al., Molecular pharmacological aspects of an…, Archiv der Pharmazie (1990) | pd | 4 | [10.1002/ardp.19903230809](https://doi.org/10.1002/ardp.19903230809) | [2278515](https://www.ncbi.nlm.nih.gov/pubmed/2278515) | metadata signals extractable PD data (IC50) |
| `Ratner_1992.pdf` | Ratner EI et al., Effect of moracizine and ethacizine on…, Arzneimittel-Forschung (1992) | pd | 4 | not captured | [1326968](https://www.ncbi.nlm.nih.gov/pubmed/1326968) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-20T16:34:24.275720+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_1989 | irrelevant | 0 | 0 | The study focuses on the safety and efficacy of anti-arrhythmic drug combinations (ethmozine, chinidin, etc.) and does not report pharmacokinetic parameters for moracizine. |
| PD | Abdalla_1989 | not_relevant | 1 | 0 | The text describes a qualitative safety and efficacy study of drug combinations without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Beloborodov_1986 | irrelevant | 0 | 0 | The study investigates ethacizine, not moracizine. |
| popPK | Chan_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethmozine, not moracizine. |
| popPK | Mannhold_1990 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Mannhold_1990 | not_relevant | 0 | 0 | The paper focuses on molecular pharmacology and calmodulin interaction, not clinical exposure-response or dose-response relationships for moracizine. |
| popPK | Morganroth_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerance study reporting dose-response and side effects, with no pharmacokinetic parameters (CL, V, t1/2) reported. |
| popPK | Ratner_1992 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Ratner_1992 | not_relevant | 0 | 0 | The paper investigates the effect of moracizine on calcium channel receptors and binding proteins in vitro, not a pharmacodynamic exposure-response or dose-response relationship in a biological system with numeric PD parameters. |
| popPK | Rozenshtraukh_1985 | irrelevant | 0 | 0 | The paper studies ethacizin (an analog of ethmozine), not moracizine, and does not report quantitative PK parameters for the target drug. |
| popPK | Vanerio_1992 | irrelevant | 1 | 0 | The text is a clinical review/summary that discusses pharmacodynamics and dosage but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for moricizine. |
| PD | Vanerio_1992 | not_relevant | 1 | 0 | The text is a qualitative review summarizing general efficacy rates and dosage, lacking any specific concentration-effect data, dose-response curves, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
