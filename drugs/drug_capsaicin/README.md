<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;capsaicin&quot;}]"></div>

# capsaicin

- **generic name:** capsaicin
- **ATC codes:** `M02AB01`, `N01BX04`
- **DrugBank:** [DB06774](https://go.drugbank.com/drugs/DB06774) · **PubChem:** [CID 1548943](https://pubchem.ncbi.nlm.nih.gov/compound/1548943)
- **molar mass:** 305.4119 g/mol (C18H27NO3) — DrugBank
- **groups:** approved, investigational

## About

Capsaicin is used topically to relieve pain, including pain associated with neuralgia such as peripheral and diabetic neuropathy and post-herpetic pain. It is approved and widely used as a topical treatment for joint and muscular pain, and an authorised product for neuralgia exists in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q273169](https://www.wikidata.org/wiki/Q273169) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:43 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 83,745/2,064 | einfracz / qwen3.8-27b | 5 | 2/3 | 4/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 296 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Babbar_2009.pdf` | Babbar S et al., Pharmacokinetic analysis of capsaicin a…, Therapeutic drug monitoring (2009) | popPK | 9 | [10.1097/FTD.0b013e3181a8b200](https://doi.org/10.1097/FTD.0b013e3181a8b200) | [19494795](https://pubmed.ncbi.nlm.nih.gov/19494795) | The paper reports a population PK model with specific mean parameters (half-life, AUC, Cmax) for capsaicin in humans, but key individual clearance/volume metrics are summarized in aggregates rather than full numeric tables. |

<sub>queue written 2026-10-07T01:43:25.323255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andresen_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of buprenorphine and fentanyl, with capsaicin used only as a probe to induce hyperalgesia. |
| popPK | Babbar_2009 | relevant | 9 | 3 | The paper reports a population PK model with specific mean parameters (half-life, AUC, Cmax) for capsaicin in humans, but key individual clearance/volume metrics are summarized in aggregates rather than full numeric tables. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on TRP channel activation by reactive oxygen species using capsaicin as a tool agonist, reporting no pharmacokinetic parameters. |
| popPK | Fiedler-Kelly_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of galcanezumab using capsaicin-induced dermal blood flow as a biomarker, rather than reporting the pharmacokinetic parameters of capsaicin itself. |
| popPK | Grider_1994 | irrelevant | 0 | 0 | The study investigates the role of CGRP as a neurotransmitter in the peristaltic reflex, using capsaicin only as a sensory neurotoxin to deplete transmitters, without measuring any pharmacokinetic parameters for capsaicin itself. |
| popPK | Hijma_2021 | irrelevant | 0 | 0 | The study evaluates VX-150 (a NaV1.8 inhibitor) using capsaicin only as a pharmacodynamic pain model, not as the subject drug for pharmacokinetic analysis. |
| popPK | Holt_2023 | irrelevant | 0 | 0 | The study uses capsaicin as a diagnostic provocation agent to measure cough reflex sensitivity (Emax, ED50) and does not report any pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for capsaicin. |
| popPK | Iwasaki_2008 | irrelevant | 0 | 0 | The paper is a mechanistic study on TRPV1 receptor activation by monoacylglycerols using capsaicin only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on the PK/PD of MK-3207 using capsaicin as a diagnostic probe to stimulate CGRP release, rather than measuring the pharmacokinetic parameters of capsaicin itself. |
| popPK | Olesen_2010 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding capsaicin pharmacokinetics. |
| popPK | Pinna_1995 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of capsaicin's pharmacodynamic effects on muscle contractions, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rogliani_2025 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study on human bronchi where capsaicin is used merely as a TRPV1 agonist tool compound, with no pharmacokinetic parameters reported. |
| popPK | Satia_2017 | irrelevant | 0 | 0 | The study investigates capsaicin-evoked cough responses (pharmacodynamics/toxicology) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sergeeva_2022 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of Nα-oleoylhistamine on histaminergic neurons in mouse brain slices, with capsaicin only mentioned as a receptor involved in a negative control (capsaicin receptor blocker), and no pharmacokinetic parameters for capsaicin are reported. |
| popPK | Smith_2017 | irrelevant | 0 | 0 | Capsaicin is used only as a diagnostic/challenge agent in a study of GSK2339345, with no PK parameters reported for it. |
| popPK | Srinivasan_2022 | irrelevant | 0 | 0 | The study characterizes a CGRP antagonist (FE 205030) where capsaicin is used only as a stimulus for a pharmacodynamic model, not as the subject drug for PK characterization. |
| popPK | Vu_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of erenumab, using capsaicin only as a topical agent to induce a pharmacodynamic biomarker (dermal blood flow). |
| popPK | Wang_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on the potency of VR1 antagonists in cell lines, not a pharmacokinetic study of capsaicin. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and in-vitro biological evaluation study of cinnamic acid derivatives containing a capsaicin moiety, containing no pharmacokinetic data for capsaicin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
