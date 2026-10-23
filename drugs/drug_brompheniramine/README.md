<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;brompheniramine&quot;}]"></div>

# brompheniramine

- **generic name:** brompheniramine
- **ATC codes:** `R06AB01`
- **DrugBank:** [DB00835](https://go.drugbank.com/drugs/DB00835) · **PubChem:** [CID 6834](https://pubchem.ncbi.nlm.nih.gov/compound/6834)
- **molar mass:** 319.239 g/mol (C16H19BrN2) — DrugBank
- **groups:** approved

## About

Brompheniramine is an antihistamine used to relieve allergy symptoms such as vasomotor rhinitis. It is an approved, older first-generation antihistamine, available mainly in over-the-counter cold and allergy medicines, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2606497](https://www.wikidata.org/wiki/Q2606497) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2006_I_Ca](drugs/drug_brompheniramine/pd_Shin_2006_I_Ca.md) | I(Ca) ← brompheniramine · direct sigmoid Emax (Hill) effect | — | Shin WH et al., Electrophysiological effects of bromphe…, Pharmacological research (2006) | [10.1016/j.phrs.2006.08.004](https://doi.org/10.1016/j.phrs.2006.08.004) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2006_I_Na](drugs/drug_brompheniramine/pd_Shin_2006_I_Na.md) | I(Na) ← brompheniramine · direct sigmoid Emax (Hill) effect | — | Shin WH et al., Electrophysiological effects of bromphe…, Pharmacological research (2006) | [10.1016/j.phrs.2006.08.004](https://doi.org/10.1016/j.phrs.2006.08.004) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shin_2006_I_hERG](drugs/drug_brompheniramine/pd_Shin_2006_I_hERG.md) | I(hERG) ← brompheniramine · direct sigmoid Emax (Hill) effect | — | Shin WH et al., Electrophysiological effects of bromphe…, Pharmacological research (2006) | [10.1016/j.phrs.2006.08.004](https://doi.org/10.1016/j.phrs.2006.08.004) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brompheniramine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:43 | 1:06 | 0/0/0 | 0/1/0 | 0/0/0 | 13,054/1,453 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_1998.pdf` | Wang WX et al., "Conventional" antihistamines slow card…, Journal of cardiovascular p… (1998) | pd | 4 | [10.1097/00005344-199807000-00019](https://doi.org/10.1097/00005344-199807000-00019) | [9676731](https://www.ncbi.nlm.nih.gov/pubmed/9676731) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T22:42:51.228508+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chiu_2019 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (ED50, duration of analgesia) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Dachman_1994 | irrelevant | 0 | 0 | Brompheniramine is used as a pharmacological tool (H1 antagonist) to study histamine-induced venodilation, not as the subject of a pharmacokinetic analysis. |
| popPK | Guevara-Balcázar_2003 | irrelevant | 0 | 0 | Brompheniramine is used only as an H1 receptor antagonist to block effects in an in-vitro rat heart model, with no pharmacokinetic parameters reported. |
| popPK | Onaran_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor kinetics experiment in isolated rabbit arteries, not a pharmacokinetic study of drug disposition. |
| popPK | Shin_2006 | irrelevant | 0 | 0 | The study investigates cardiac electrophysiological effects (ion channel blocking) in vitro and in isolated tissues, not pharmacokinetic disposition parameters. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of cardiac repolarization (QT prolongation) in isolated feline hearts, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
