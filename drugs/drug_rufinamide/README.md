<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;rufinamide&quot;}]"></div>

# rufinamide

- **generic name:** rufinamide
- **ATC codes:** `N03AF03`
- **DrugBank:** [DB06201](https://go.drugbank.com/drugs/DB06201) · **PubChem:** [CID 129228](https://pubchem.ncbi.nlm.nih.gov/compound/129228)
- **molar mass:** 238.1935 g/mol (C10H8F2N4O) — DrugBank
- **groups:** approved

## About

Rufinamide is an anticonvulsant used to treat epilepsy. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408565](https://www.wikidata.org/wiki/Q408565) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rufinamide | parent | 238.194 | C10H8F2N4O | DrugBank | [129228](https://pubchem.ncbi.nlm.nih.gov/compound/129228) | Arzimanoglou_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:44 | 0:30 | 0/0/1 | 0/0/0 | 0/0/0 | 53,498/3,014 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arzimanoglou_2016_reference](drugs/drug_rufinamide/Rufinamide_Arzimanoglou2016_reference.md) | — | 1-compartment (no model) | 1 | Arzimanoglou A et al., Safety and pharmacokinetic profile of r…, European journal of paediat… (2016) | [10.1016/j.ejpn.2015.12.015](https://doi.org/10.1016/j.ejpn.2015.12.015) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arzimanoglou_2016.pdf` | Arzimanoglou A et al., Safety and pharmacokinetic profile of r…, European journal of paediat… (2016) | popPK | 9 | [10.1016/j.ejpn.2015.12.015](https://doi.org/10.1016/j.ejpn.2015.12.015) | [26805435](https://pubmed.ncbi.nlm.nih.gov/26805435) | The paper reports a population PK analysis for rufinamide and provides the specific apparent clearance (CL/F) value of 2.19 L/h in the text. |
| `Xu_2016.pdf` | Xu M et al., Pharmacokinetics and Tolerability of Ru…, European journal of drug me… (2016) | popPK | 9 | [10.1007/s13318-015-0291-4](https://doi.org/10.1007/s13318-015-0291-4) | [26294172](https://pubmed.ncbi.nlm.nih.gov/26294172) | The study reports quantitative PK parameters for rufinamide, but specific values for clearance (CL), volume (V), and half-life (t1/2) are not explicitly listed in the provided text, only exposure metrics (Cmax, AUC). |
| `Perucca_2008.pdf` | Perucca E et al., Rufinamide: clinical pharmacokinetics a…, Epilepsia (2008) | popPK | 8 | [10.1111/j.1528-1167.2008.01665.x](https://doi.org/10.1111/j.1528-1167.2008.01665.x) | [18503564](https://pubmed.ncbi.nlm.nih.gov/18503564) | The paper is a clinical pharmacokinetic review that describes rufinamide's PK parameters (half-life, CL/F, Vd/F) and mentions population modeling, but it provides only qualitative ranges or qualitative descriptions rather than a full table of specific quantitative numeric parameter values for direct extraction. |

<sub>queue written 2026-10-07T07:44:12.629715+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chuang_2021 | irrelevant | 0 | 0 | The paper is an electrophysiological study on apocynin's effect on ion channels, and rufinamide is only used as a co-administered inhibitor to demonstrate attenuation of current, not as a subject for PK analysis. |
| popPK | Marchand_2010 | irrelevant | 3 | 0 | The paper is a simulation study based on pre-existing PK parameters, and no specific numeric rufinamide PK parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Perucca_2008 | relevant | 8 | 4 | The paper is a clinical pharmacokinetic review that describes rufinamide's PK parameters (half-life, CL/F, Vd/F) and mentions population modeling, but it provides only qualitative ranges or qualitative descriptions rather than a full table of specific quantitative numeric parameter values for direct extraction. |
| popPK | Xu_2016 | relevant | 9 | 4 | The study reports quantitative PK parameters for rufinamide, but specific values for clearance (CL), volume (V), and half-life (t1/2) are not explicitly listed in the provided text, only exposure metrics (Cmax, AUC). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:44 UTC</sub>
