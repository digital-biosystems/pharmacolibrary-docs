<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;picotamide&quot;}]"></div>

# picotamide

- **generic name:** picotamide
- **ATC codes:** `B01AC03`
- **DrugBank:** [DB13327](https://go.drugbank.com/drugs/DB13327)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:18 | 1:30 | 0/0/0 | 0/1/0 | 0/0/0 | 1,250/3,786 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Li_2021](drugs/drug_picotamide/pd_Li_2021_unknown.md) | Li (2021) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anfossi_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report any pharmacokinetic parameters. |
| popPK | Buccellati_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of 2NTX-99, a different drug, and does not report pharmacokinetic parameters for picotamide. |
| popPK | Collins_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thromboxane inhibition and does not report pharmacokinetic parameters for picotamide. |
| popPK | Gresele_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and does not report any pharmacokinetic parameters. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction in porcine arteries and does not report any pharmacokinetic parameters for picotamide. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro anti-platelet activity of picotamide analogs, containing no pharmacokinetic data. |
| popPK | Liu_2015_2 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and antiplatelet activity study, not a pharmacokinetic study, and reports no disposition parameters for picotamide. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is an in-vitro synthesis and biological evaluation of novel compounds where picotamide is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper reports IC50 values for novel compounds and compares them to picotamide, but does not provide numeric PD parameters (IC50, Emax, etc.) for picotamide itself, nor does it model a concentration-effect relationship for picotamide. |
| popPK | Vezza_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (vasoconstriction and platelet aggregation) and does not report any pharmacokinetic parameters. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anti-platelet activity of novel benzamides, not the pharmacokinetics of picotamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
