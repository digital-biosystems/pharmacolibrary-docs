<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;brodalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brodalumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Brodalumab_Endres2014_reference&quot;,&quot;label&quot;:&quot;Endres_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brodalumab/Brodalumab_Endres2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# brodalumab

- **generic name:** brodalumab
- **ATC codes:** `L04AC12`
- **DrugBank:** [DB11776](https://go.drugbank.com/drugs/DB11776) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Brodalumab is a monoclonal antibody used to treat psoriasis. It is authorised in the European Union for psoriasis and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4972934](https://www.wikidata.org/wiki/Q4972934) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:01 | 0:54 | 1/2/1 | 0/0/0 | 0/0/0 | 43,687/3,899 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Endres_2014_reference](drugs/drug_brodalumab/Brodalumab_Endres2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Endres CJ et al., Population pharmacokinetics of brodalum…, Journal of clinical pharmac… (2014) | [10.1002/jcph.334](https://doi.org/10.1002/jcph.334) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Salinger_2014_reference](drugs/drug_brodalumab/Brodalumab_Salinger2014_reference.md) | — | 1-compartment (no model) | 0 | Salinger DH et al., A semi-mechanistic model to characteriz…, Clinical pharmacology in dr… (2014) | [10.1002/cpdd.103](https://doi.org/10.1002/cpdd.103) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Timmermann_2019_reference](drugs/drug_brodalumab/Brodalumab_Timmermann2019_reference.md) | — | 2-compartment (no model) | 8 (+3 cov.) | Timmermann S et al., Population pharmacokinetics of brodalum…, Basic & clinical pharmacolo… (2019) | [10.1111/bcpt.13202](https://doi.org/10.1111/bcpt.13202) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brodalumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (modulator), IL17RA (inhibitor), IL17RA (target), IL17RB (target), IL17RC (target), IL17RD (target), IL17RE (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Endres_2014.pdf` | Endres CJ et al., Population pharmacokinetics of brodalum…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.334](https://doi.org/10.1002/jcph.334) | [24846347](https://pubmed.ncbi.nlm.nih.gov/24846347) | The paper reports a population PK model for brodalumab in humans with specific numeric values for CL, V, and V(max) provided in the text. |
| `Salinger_2014.pdf` | Salinger DH et al., A semi-mechanistic model to characteriz…, Clinical pharmacology in dr… (2014) | popPK | 10 | [10.1002/cpdd.103](https://doi.org/10.1002/cpdd.103) | [27128833](https://pubmed.ncbi.nlm.nih.gov/27128833) | The paper describes a two-compartment PK model for brodalumab in humans, but specific numeric disposition parameters (CL, V, half-life) are not explicitly listed in the provided text, likely residing in figures or supplementary tables. |

<sub>queue written 2026-10-14T21:00:28.396609+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rodríguez-Fernández_2022 | irrelevant | 2 | 1 | This is a review article that summarizes PK parameters for multiple monoclonal antibodies, but the specific numeric disposition parameters for brodalumab are not present in the provided text or evidence lines. |
| popPK | Schwagerle_2026 | irrelevant | 0 | 0 | The study focuses on a porcine microperfusion model and PBPK modeling to predict human bioavailability, rather than reporting direct quantitative disposition parameters (CL, V, etc.) for brodalumab in a standard PK study, and no numeric values are provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:00 UTC</sub>
