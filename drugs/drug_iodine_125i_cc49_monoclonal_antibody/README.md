<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;iodine (125I) CC49-monoclonal antibody&quot;}]"></div>

# iodine (125I) CC49-monoclonal antibody

- **generic name:** iodine (125I) CC49-monoclonal antibody
- **ATC codes:** `V09IX03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This radiolabelled monoclonal antibody was developed as a diagnostic radiopharmaceutical for detecting tumours. It is not an established marketed medicine; it appears only as a tumour-detection agent in the diagnostic radiopharmaceutical class, with no evidence of wide clinical use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:13 | 1:27 | 0/0/0 | 0/0/0 | 0/0/0 | 17,861/1,366 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colcher_1988 | irrelevant | 2 | 0 | The study is a preclinical xenograft model in mice focusing on tumor targeting and biodistribution, and no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Divgi_1995 | irrelevant | 2 | 0 | The study uses 131I-labeled CC49 (not 125I) and reports only qualitative observations of serum clearance changes without providing quantitative PK parameter values (CL, V, t1/2). |
| popPK | Hand_1994 | irrelevant | 0 | 0 | The paper is a review of recombinant immunoglobulin constructs and does not report quantitative pharmacokinetic parameters for iodine-125i CC49. |
| popPK | Kashmiri_1995 | irrelevant | 2 | 0 | The study reports qualitative comparisons of plasma clearance and biodistribution in mice but provides no quantitative PK parameter values (CL, V, t1/2) for the specific drug iodine_125i_cc49_monoclonal_antibody. |
| popPK | Macey_1999 | irrelevant | 2 | 0 | The study focuses on I-131 CC49 as a comparator to other radionuclides (Lu-177, Y-90, etc.) for dosimetry, and does not report specific quantitative PK parameters (CL, V, Q) for I-125 CC49. |
| popPK | Milenic_1991 | irrelevant | 2 | 2 | The study focuses on a single-chain Fv (sFv) fragment of CC49, not the intact iodine-125i_cc49_monoclonal_antibody, and the provided PK values are for the sFv in monkeys, not the parent antibody. |
| popPK | Murray_1994 | irrelevant | 2 | 1 | The study uses I-131 (not I-125) and reports only whole-body half-life without compartmental volume or clearance parameters required for population PK modeling. |
| popPK | Murray_1995 | irrelevant | 2 | 0 | The study uses 131I-CC49 (not 125I-CC49) as a diagnostic/therapeutic agent to assess IFN-alpha effects, and no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Rossin_2014 | irrelevant | 0 | 0 | The study focuses on a different antibody construct (CC49-TCO) and does not report quantitative PK parameters for iodine_125i_cc49_monoclonal_antibody. |
| popPK | Schott_1992 | irrelevant | 2 | 0 | The study is a preclinical animal study (mice) comparing metabolic patterns of two radiolabeled forms, and no quantitative PK parameter values (CL, V, t1/2) are provided in the evidence. |
| popPK | Shah_2017 | irrelevant | 0 | 0 | The study investigates 212Pb-labeled tetrazine chelators and CC49-TCO in mice, not the pharmacokinetics of iodine_125i_cc49_monoclonal_antibody. |
| popPK | Shen_2005 | irrelevant | 0 | 0 | The study reports dosimetry for 90Y/111In-DOTA-biotin after pretargeting with CC49 fusion protein, not the pharmacokinetics of iodine_125i_cc49_monoclonal_antibody. |
| popPK | Shen_2011 | irrelevant | 2 | 1 | The study reports biodistribution and dosimetry (half-lives and dose ratios) for a different radiolabeled antibody (In-111/Y-90-HuCC49), not the specific drug iodine_125i_cc49_monoclonal_antibody. |
| popPK | Slavin-Chiorini_1995 | irrelevant | 2 | 0 | The study reports qualitative comparisons of plasma clearance and biodistribution (%ID/g) for iodine-125 labeled CC49 in mice and primates, but does not provide quantitative compartmental PK parameters (CL, V, t1/2) or numeric values for the subject drug. |
| popPK | Yokota_1992 | irrelevant | 0 | 0 | The study focuses on tumor penetration and distribution of various immunoglobulin forms (sFv, Fab', IgG) of CC49 in mice, not on the pharmacokinetic parameters (CL, V, etc.) of the specific drug iodine_125i_cc49_monoclonal_antibody as a systemic disposition model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
