<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;laronidase&quot;}]"></div>

# laronidase

- **generic name:** laronidase
- **ATC codes:** `A16AB05`
- **DrugBank:** [DB00090](https://go.drugbank.com/drugs/DB00090) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Laronidase is an enzyme replacement therapy used to treat mucopolysaccharidosis I, a rare inherited metabolic disorder. It is authorised in the European Union and is an approved medicine, used mainly in specialist care for this rare disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801774](https://www.wikidata.org/wiki/Q20801774) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:13 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 29,338/1,917 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=laronidase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Iduronic acid (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mayer_2015.pdf` | Mayer FQ et al., Laronidase-functionalized multiple-wall…, Pharmaceutical research (2015) | popPK | 8 | [10.1007/s11095-014-1508-y](https://doi.org/10.1007/s11095-014-1508-y) | [25208876](https://pubmed.ncbi.nlm.nih.gov/25208876) | The study investigates the pharmacokinetic profile (clearance, biodistribution) of laronidase formulations in an animal model, but specific numeric PK parameter values (CL, V) are not present in the text. |

<sub>queue written 2026-10-15T03:13:39.358670+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a general review of approved enzyme therapies and does not contain original pharmacokinetic data or quantitative disposition parameters for laronidase. |
| popPK | Giugliani_2009 | irrelevant | 1 | 0 | The paper is a dose-optimization trial focusing on pharmacodynamic endpoints (GAG excretion, liver volume) and safety, with no quantitative pharmacokinetic parameters (CL, V, t1/2) reported for laronidase. |
| PD | Giugliani_2009 | not_relevant | 3 | 1 | The paper reports a dose-optimization trial comparing different dosing regimens but only provides qualitative conclusions (e.g., "no significant differences," "near-maximal reductions") without reporting specific numeric PD parameters (like Emax, EC50) or detailed concentration-effect curves in the provided text. |
| popPK | Giugliani_2017 | irrelevant | 0 | 0 | The paper is a clinical trial focused on immune tolerance and antibody titers for laronidase, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Harmatz_2024 | irrelevant | 0 | 0 | The study is about lepunafusp alfa (IDUA fusion protein), not laronidase, which is only mentioned as a comparator for efficacy. |
| popPK | He_2013 | irrelevant | 0 | 0 | The paper focuses on the production and glycosylation of recombinant alpha-L-iduronidase (IDUA) in Arabidopsis seeds, not the pharmacokinetics of laronidase. |
| PD | He_2013 | not_relevant | 0 | 0 | The paper focuses on the production, glycosylation, and enzymatic kinetics of recombinant IDUA in Arabidopsis seeds, containing no pharmacokinetic or pharmacodynamic data for laronidase in vivo. |
| PGx | Jameson_2013 | not_relevant | 0 | 0 | The paper is a Cochrane review evaluating the efficacy and safety of laronidase for MPS I and does not report on pharmacogenomic effects (gene variants) on pharmacokinetics or pharmacodynamics. |
| PGx | Jameson_2013_2 | not_relevant | 0 | 0 | The paper is a systematic review evaluating the clinical efficacy and safety of laronidase, but it does not report pharmacogenomic effects (gene variant-specific changes) on PK or PD parameters. |
| PGx | Jameson_2016 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of laronidase in MPS I; it does not report pharmacogenomic associations. |
| PGx | Jameson_2019 | not_relevant | 0 | 0 | The paper is a clinical trial review of laronidase efficacy and safety in MPS I, reporting no data on genetic variants affecting the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Mayer_2015 | relevant | 8 | 2 | The study investigates the pharmacokinetic profile (clearance, biodistribution) of laronidase formulations in an animal model, but specific numeric PK parameter values (CL, V) are not present in the text. |
| popPK | Pardridge_2018 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of valanafusp alpha, with laronidase mentioned only as a comparator or prior therapy without providing quantitative PK parameters for laronidase itself. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for vestronidase alfa, not laronidase. |
| popPK | Wraith_2007 | irrelevant | 2 | 0 | The paper focuses on clinical efficacy and safety outcomes in pediatric patients, with no quantitative pharmacokinetic parameters (CL, V, half-life) reported in the provided evidence. |
| popPK | Xue_2016 | irrelevant | 0 | 0 | The paper is a meta-analysis focused on the relationship between anti-drug antibodies and clinical/pharmacodynamic efficacy (urinary GAG levels), and does not report quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PD | Xue_2016 | not_relevant | 3 | 1 | The paper is a meta-analysis reporting qualitative inverse relationships between antibody levels and GAG reduction, but it does not provide a formal PK/PD model or specific numeric PD parameters (e.g., Emax, EC50) for laronidase exposure. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
