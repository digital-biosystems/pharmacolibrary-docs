<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04A&quot;,&quot;href&quot;:&quot;atc/N04A.md&quot;},{&quot;label&quot;:&quot;biperiden&quot;}]"></div>

# biperiden

- **generic name:** biperiden
- **ATC codes:** `N04AA02`
- **DrugBank:** [DB00810](https://go.drugbank.com/drugs/DB00810) · **PubChem:** [CID 2381](https://pubchem.ncbi.nlm.nih.gov/compound/2381)
- **molar mass:** 311.4611 g/mol (C21H29NO) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Biperiden is an anticholinergic drug used to treat Parkinson's disease and lingual-facial-buccal dyskinesia. It remains in clinical use, is listed among WHO essential medicines, and is approved though also marked investigational and withdrawn in some contexts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414914](https://www.wikidata.org/wiki/Q414914) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| biperiden | parent | 311.461 | C21H29NO | DrugBank | [2381](https://pubchem.ncbi.nlm.nih.gov/compound/2381) | Bakker_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Bakker_2021_reference](drugs/drug_biperiden/Biperiden_Bakker2021_reference.md) | — | 1-compartment (no model) | 2 | Bakker C et al., Biperiden Challenge Model in Healthy El…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1913](https://doi.org/10.1002/jcph.1913) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Jackisch_1994_3H_ACh_release](drugs/drug_biperiden/pd_Jackisch_1994_3H_ACh_release.md) | [3H]acetylcholine release ← biperiden · inhibition effect | — | Jackisch R et al., The antiparkinsonian drugs budipine and…, European journal of pharmac… (1994) | [10.1016/0014-2999(94)00528-1](https://doi.org/10.1016/0014-2999(94)00528-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:13 | 0:46 | 0/0/1 | 1/0/0 | 0/0/0 | 25,980/1,863 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Capacio_2003.pdf` | Capacio BR et al., Pharmacokinetics of intramuscularly adm…, Drug and chemical toxicology (2003) | popPK | 9 | [10.1081/dct-120017553](https://doi.org/10.1081/dct-120017553) | [12643036](https://pubmed.ncbi.nlm.nih.gov/12643036) | The study reports pharmacokinetics for biperiden in guinea pigs with a one-compartment model, but specific numeric values for clearance, volume of distribution, and half-life are not provided in the text, only Cmax and Tmax. |

<sub>queue written 2026-10-07T07:13:13.899594+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Capacio_2003 | relevant | 9 | 2 | The study reports pharmacokinetics for biperiden in guinea pigs with a one-compartment model, but specific numeric values for clearance, volume of distribution, and half-life are not provided in the text, only Cmax and Tmax. |
| popPK | Jackisch_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor antagonism in rabbit brain slices, reporting Ki/IC50 values rather than pharmacokinetic parameters (CL, V, etc.). |
| popPK | Yokogawa_1986 | irrelevant | 0 | 0 | The provided evidence consists only of metadata and software logs, containing no scientific content or pharmacokinetic data for biperiden. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of haloperidol; biperiden is only mentioned as a co-administered antiparkinsonian drug which did not significantly affect the model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 07:13 UTC</sub>
