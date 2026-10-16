<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;picotamide&quot;}]"></div>

# picotamide

- **generic name:** picotamide
- **ATC codes:** `B01AC03`
- **DrugBank:** [DB13327](https://go.drugbank.com/drugs/DB13327) · **PubChem:** not captured
- **molar mass:** 376.416 g/mol (C21H20N4O3) — DrugBank
- **groups:** experimental

## About

Picotamide is a platelet aggregation inhibitor, an antithrombotic drug used to prevent blood clots. It is not an approved medicine in the European Union and appears only as an experimental agent, so its current clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1235921](https://www.wikidata.org/wiki/Q1235921) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:21 | 0:30 | 0/0/0 | 0/1/0 | 0/0/0 | 42,484/759 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Collins_1996_TxB2](drugs/drug_picotamide/pd_Collins_1996_TxB2.md) | thromboxane B2 release ← picotamide · direct Emax (saturable) effect | — | Collins CE et al., Picotamide inhibition of excess in vitr…, Alimentary pharmacology & t… (1996) | [10.1111/j.0953-0673.1996.00315.x](https://doi.org/10.1111/j.0953-0673.1996.00315.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anfossi_1995 | irrelevant | 0 | 0 | The study is in vitro mechanistic (platelet aggregation) and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Buccellati_2006 | irrelevant | 0 | 0 | The study characterizes the pharmacology and PK of 2NTX-99, a novel compound related to picotamide, but does not report PK parameters for picotamide itself. |
| popPK | Collins_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thromboxane inhibition and does not report pharmacokinetic parameters for picotamide. |
| popPK | Gresele_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and does not report any pharmacokinetic parameters. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study examining smooth muscle contraction in porcine arteries, and does not report any pharmacokinetic parameters. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro anti-platelet activity of picotamide analogs, containing no pharmacokinetic data. |
| popPK | Liu_2015_2 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and antiplatelet activity study, not a pharmacokinetic study, and reports no disposition parameters for picotamide. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is an in-vitro synthesis and biological evaluation of novel compounds where picotamide is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper reports IC50 values for novel compounds and compares them to picotamide, but does not provide numeric PD parameters (IC50, Emax, etc.) for picotamide itself, nor does it model a concentration-effect relationship for picotamide. |
| popPK | Vezza_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (vasoconstriction and platelet aggregation) and does not report any pharmacokinetic parameters. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anti-platelet activity of novel benzamides, not the pharmacokinetics of picotamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
