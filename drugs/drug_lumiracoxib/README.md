<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;lumiracoxib&quot;}]"></div>

# lumiracoxib

- **generic name:** lumiracoxib
- **ATC codes:** `M01AH06`
- **DrugBank:** [DB01283](https://go.drugbank.com/drugs/DB01283) · **PubChem:** [CID 151166](https://pubchem.ncbi.nlm.nih.gov/compound/151166)
- **molar mass:** 293.721 g/mol (C15H13ClFNO2) — DrugBank
- **groups:** approved, withdrawn

## About

Lumiracoxib is a COX-2 inhibitor (coxib) that was used as a non-steroidal anti-inflammatory drug to treat pain and inflammation, such as in osteoarthritis. It has been withdrawn from the market, mainly because of concerns about serious liver damage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413744](https://www.wikidata.org/wiki/Q413744) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lumiracoxib | parent | 293.721 | C15H13ClFNO2 | DrugBank | [151166](https://pubchem.ncbi.nlm.nih.gov/compound/151166) | Vásquez-Bahena_2010_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:55 | 0:45 | 0/3/0 | 1/0/0 | 0/0/0 | 103,233/6,253 | einfracz / qwen3.8-27b | 13 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Vásquez-Bahena_2010_2_estimate](drugs/drug_lumiracoxib/Lumiracoxib_VsquezBahena20102_estimate.md) | — | 1-compartment (no model) | 7 | Vásquez-Bahena DA et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2009.00508.x](https://doi.org/10.1111/j.1476-5381.2009.00508.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Vásquez-Bahena_2010_2_experiment_i](drugs/drug_lumiracoxib/Lumiracoxib_VsquezBahena20102_experiment_i.md) | — | 1-compartment (no model) | 5 | Vásquez-Bahena DA et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2009.00508.x](https://doi.org/10.1111/j.1476-5381.2009.00508.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Vásquez-Bahena_2010_2_experiment_i_and_ii](drugs/drug_lumiracoxib/Lumiracoxib_VsquezBahena20102_experiment_i_and_ii.md) | — | 1-compartment (no model) | 5 | Vásquez-Bahena DA et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2009.00508.x](https://doi.org/10.1111/j.1476-5381.2009.00508.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Vásquez-Bahena_2010_2_LT](drugs/drug_lumiracoxib/pd_V_squez_Bahena_2010_2_LT.md) | latency time (LT) to a thermal stimulus biomarker turnover ← lumiracoxib | — | Vásquez-Bahena DA et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2010) | [10.1111/j.1476-5381.2009.00508.x](https://doi.org/10.1111/j.1476-5381.2009.00508.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lumiracoxib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `UGT1A9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scott_2004_2.pdf` | Scott G et al., Pharmacokinetics of lumiracoxib in plas…, Clinical pharmacokinetics (2004) | popPK | 6 | [10.2165/00003088-200443070-00003](https://doi.org/10.2165/00003088-200443070-00003) | [15139795](https://pubmed.ncbi.nlm.nih.gov/15139795) | Reports PK of lumiracoxib in humans (RA patients) with some quantitative values (Cmax time, half-life, concentrations, AUC ratio) but lacks explicit CL, V, or full population model parameter estimates in the provided evidence. |

<sub>queue written 2026-10-07T01:54:31.366767+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Honjo_2014 | irrelevant | 1 | 0 | This study reports the pharmacokinetics of the probe drug phenolsulfonphthalein (PSP) to demonstrate lumiracoxib's inhibitory effect on renal transporters, rather than reporting disposition parameters (CL, V, t1/2) for lumiracoxib itself. |
| popPK | Kindla_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter interactions using lumiracoxib as an inhibitor, not a pharmacokinetic study reporting disposition parameters for lumiracoxib. |
| popPK | Klein_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of celecoxib's vascular effects, where lumiracoxib is only mentioned as a comparator that failed to increase coronary flow, with no PK parameters reported. |
| popPK | Scott_2004_2 | relevant | 6 | 4 | Reports PK of lumiracoxib in humans (RA patients) with some quantitative values (Cmax time, half-life, concentrations, AUC ratio) but lacks explicit CL, V, or full population model parameter estimates in the provided evidence. |
| popPK | Vélez_2012 | irrelevant | 1 | 0 | This is a pharmacodynamic study modeling the mechanism of analgesic effects (pain behavior) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:54 UTC</sub>
