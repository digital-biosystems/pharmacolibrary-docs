<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sapropterin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sapropterin_Feillet2008_reference&quot;,&quot;label&quot;:&quot;Feillet_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sapropterin/Sapropterin_Feillet2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sapropterin

- **generic name:** sapropterin
- **ATC codes:** `A16AX07`
- **DrugBank:** [DB00360](https://go.drugbank.com/drugs/DB00360) · **PubChem:** [CID 44257](https://pubchem.ncbi.nlm.nih.gov/compound/44257)
- **molar mass:** 241.2471 g/mol (C9H15N5O3) — DrugBank
- **groups:** approved, investigational

## About

Sapropterin is used to treat phenylketonuria, a metabolic disorder. It is authorised in the European Union and is an approved medicine, though it has also been studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419808](https://www.wikidata.org/wiki/Q419808) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sapropterin | parent | 241.247 | C9H15N5O3 | DrugBank | [44257](https://pubchem.ncbi.nlm.nih.gov/compound/44257) | Feillet_2008, Muntau_2017, Qi_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:29 | 7:05 | 1/2/0 | 0/0/0 | 0/0/0 | 87,987/22,936 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Feillet_2008_reference](drugs/drug_sapropterin/Sapropterin_Feillet2008_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Feillet F et al., Pharmacokinetics of sapropterin in pati…, Clinical pharmacokinetics (2008) | [10.2165/0003088-200847120-00006](https://doi.org/10.2165/0003088-200847120-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Muntau_2017_reference](drugs/drug_sapropterin/Sapropterin_Muntau2017_reference.md) | — | 1-compartment (no model) | 5 (+2 cov.) | Muntau AC et al., Efficacy, safety and population pharmac…, Orphanet journal of rare di… (2017) | [10.1186/s13023-017-0600-x](https://doi.org/10.1186/s13023-017-0600-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857), gpt-oss:120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Qi_2015_reference](drugs/drug_sapropterin/Sapropterin_Qi2015_reference.md) | — | 1-compartment (no model) | 5 (+2 cov.) | Qi Y et al., A prospective population pharmacokineti…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0196-4](https://doi.org/10.1007/s40262-014-0196-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sapropterin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NOS3 (cofactor), PAH (cofactor), PTGS2 (inducer), TH (cofactor), TPH1 (cofactor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Feillet_2008.pdf` | Feillet F et al., Pharmacokinetics of sapropterin in pati…, Clinical pharmacokinetics (2008) | popPK | 10 | [10.2165/0003088-200847120-00006](https://doi.org/10.2165/0003088-200847120-00006) | [19026037](https://pubmed.ncbi.nlm.nih.gov/19026037) | The study reports quantitative population PK parameters (CL, V, half-life) for sapropterin in humans with values explicitly stated in the abstract. |

<sub>queue written 2026-10-05T11:22:52.020130+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 11:23 UTC</sub>
