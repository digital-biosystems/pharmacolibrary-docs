<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;tixocortol&quot;}]"></div>

# tixocortol

- **generic name:** tixocortol
- **ATC codes:** `A07EA05`, `R01AD07`
- **DrugBank:** [DB09091](https://go.drugbank.com/drugs/DB09091)
- **groups:** approved, withdrawn

## About

**Description.** Tixocortol is a 21-thiol derivative of hydrocortisone classified as a class A corticosteroid. It is a synthetic steroid with topical anti-inflammatory properties without the systemic glucocorticoid and mineralocorticoid activities and toxicity.[L1078]

**Indication.** Tixocortol is indicated for the treatment of rhinitis as a nasal suspension or aerosol. It is also used in the form of lozenges for the treatment of pharyngitis and in the form of enemas or rectal solution for the treatment of ulcerative colitis. Tixocortol can be used orally in a suspension or powder for the treatment of inflammatory conditions.[L1077] It is also the substance used for the screening of contact allergies to class A steroids.[A31435]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 06:17 | 1:21 | 0/0/0 | 0/0/0 | 0/0/0 | 13,783/1,174 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tixocortol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>“…Tixocortol is rapidly modified within red blood cells and it is immediately metabolized by…”</sub> | prose |
| metabolism | liver | <sub>“…thin red blood cells and it is immediately metabolized by a first-pass liver metabolism.[L…”</sub> | prose |
| excretion | kidney | <sub>“…cortol has a rapid elimination after continuous metabolism. Urine analysis of oral adminis…”</sub> | prose |

<sub>Actors without a tissue in the table: HDAC2 (stimulator), NR3C1 (binder).</sub>

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

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chanoine_1984.pdf` | Chanoine F et al., Comparative pharmacokinetic studies of…, Journal of steroid biochemi… (1984) | popPK | 10 | [10.1016/0022-4731(84)90311-x](https://doi.org/10.1016/0022-4731(84)90311-x) | [6492803](https://pubmed.ncbi.nlm.nih.gov/6492803) | The study reports quantitative pharmacokinetic parameters (clearance and volume of distribution) for tixocortol pivalate in rats, with specific numeric values provided in the text. |

<sub>queue written 2026-09-22T06:17:25.713921+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ardizzone_1998 | irrelevant | 0 | 0 | The paper is a clinical review of treatment guidelines for ulcerative colitis and does not report any pharmacokinetic parameters for tixocortol. |
| PD | Ardizzone_1998 | not_relevant | 1 | 0 | The text is a general review of treatment guidelines for distal ulcerative colitis and mentions tixocortol only as a class of topically acting corticosteroids without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PGx | Ardizzone_2002 | not_relevant | 0 | 0 | The paper is a general review of ulcerative colitis therapies and mentions tixocortol pivalate only in the context of adverse event profiles, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Frankild_2001 | irrelevant | 0 | 0 | The paper describes a contact allergy study (GPMT) and does not report any pharmacokinetic parameters for tixocortol. |
| PD | Frankild_2001 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship in a contact allergy model (GPMT) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Isaksson_2000 | irrelevant | 0 | 0 | The paper is a patch-testing study investigating allergic cross-reactivity and dose-response relationships, not a pharmacokinetic study reporting disposition parameters. |
| PD | Isaksson_2000 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response pattern in patch testing (allergy) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for tixocortol. |
| popPK | Karp_1988 | irrelevant | 0 | 0 | The text is a brief news summary of clinical trials for enemas and contains no pharmacokinetic data or quantitative disposition parameters for tixocortol. |
| PD | Karp_1988 | not_relevant | 1 | 0 | The text is a brief review mentioning tixocortol as a new enema treatment but provides no pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Lelievre_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cyclooxygenase inhibition and does not report pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
