<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefaloridine&quot;}]"></div>

# cefaloridine

- **generic name:** cefaloridine
- **ATC codes:** `J01DB02`
- **DrugBank:** [DB09008](https://go.drugbank.com/drugs/DB09008) · **PubChem:** [CID 5773](https://pubchem.ncbi.nlm.nih.gov/compound/5773)
- **molar mass:** 415.486 g/mol (C19H17N3O4S2) — DrugBank
- **groups:** approved, withdrawn

## About

Cefaloridine is a first-generation cephalosporin antibiotic used to treat bacterial infections. It has been withdrawn from use, mainly because it caused kidney damage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5063323](https://www.wikidata.org/wiki/Q5063323) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.50).">human + animal</span> | [Kataoka_1983_concentration_in_prostatic_tissues](drugs/drug_cefaloridine/pd_Kataoka_1983_concentration_in_prostatic_tissues.md) | concentration in prostatic tissues ← Cefaloridine · model not identified | — | Kataoka N, [Concentration of antimicrobial agents…, Hinyokika kiyo. Acta urolog… (1983) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefaloridine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:47 | 1:33 | 0/0/0 | 0/1/0 | 0/0/0 | 20,909/1,480 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 45 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klimova_1981.pdf` | Klimova VS et al., [Cephalosporin pharmacokinetics in rabb…, Antibiotiki (1981) | popPK | 9 |  | [7235668](https://pubmed.ncbi.nlm.nih.gov/7235668) | The study describes a pharmacokinetic analysis of cefaloridine in rabbits using a one-compartment model, but no specific numeric parameter values are provided in the evidence text. |
| `Iakovlev_1978.pdf` | Iakovlev VP et al., [Pharmacokinetics of semisynthetic ceph…, Antibiotiki (1978) | popPK | 7 |  | [358914](https://pubmed.ncbi.nlm.nih.gov/358914) | The study reports quantitative pharmacokinetic parameters for cefaloridine in humans, but the specific numeric values are described qualitatively in the abstract without a provided data table. |
| `Paradelis_1977.pdf` | Paradelis AG et al., Pharmacokinetics of five cephalosporins…, Arzneimittel-Forschung (1977) | popPK | 7 |  | [580023](https://pubmed.ncbi.nlm.nih.gov/580023) | The study reports pharmacokinetic data for cefaloridine in humans, providing specific numeric values for Cmax, half-life, protein binding, and urinary recovery, although it lacks explicit clearance (CL) or volume (V) parameters. |

<sub>queue written 2026-10-07 10:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andriole_1978 | irrelevant | 2 | 0 | This is a review paper that summarizes mean half-lives from other studies but does not report original quantitative PK parameters like clearance or volume, and specific numeric values are not present in the provided evidence. |
| popPK | Browning_1983 | irrelevant | 0 | 0 | The study focuses on renal toxicity and tubular secretion mechanisms in rabbits, not quantitative population pharmacokinetic parameters for cefaloridine. |
| popPK | Diao_2010 | irrelevant | 0 | 0 | The paper is a computational QSAR study focusing on transporter inhibition (OCTN2), and cefaloridine is only mentioned as a drug evaluated for transporter interaction, with no pharmacokinetic disposition parameters reported. |
| popPK | Iakovlev_1978 | relevant | 7 | 2 | The study reports quantitative pharmacokinetic parameters for cefaloridine in humans, but the specific numeric values are described qualitatively in the abstract without a provided data table. |
| popPK | Jackson_1974 | irrelevant | 2 | 0 | The study compares cephacetrile with a combination of cephalothin and cefaloridine, focusing on efficacy and safety rather than reporting quantitative PK parameters (CL, V, half-life) specifically for cefaloridine. |
| popPK | Klimova_1981 | relevant | 9 | 0 | The study describes a pharmacokinetic analysis of cefaloridine in rabbits using a one-compartment model, but no specific numeric parameter values are provided in the evidence text. |
| popPK | Kohda_2005 | irrelevant | 0 | 0 | The study focuses on the nephrotoxicity and mechanism of injury (ERK activation) of cefaloridine, not on its pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Luft_1984 | irrelevant | 1 | 0 | This is a nephrotoxicity study in rats where cefaloridine is a comparator agent, and no quantitative pharmacokinetic parameter values are reported in the evidence. |
| popPK | Naber_1976 | irrelevant | 0 | 0 | The study measures renal lymph concentrations of cefaloridine rather than reporting pharmacokinetic disposition parameters (CL, V, t1/2) or a PK model. |
| popPK | Nagashima_1994 | irrelevant | 0 | 0 | The study investigates the protective effects of an adenosine antagonist on cephaloridine-induced renal failure and does not report pharmacokinetic parameters for cephaloridine. |
| popPK | Regamey_1973 | irrelevant | 1 | 0 | The study focuses on cephanone as the subject drug, with cefaloridine mentioned only as a comparator without specific quantitative PK parameters reported for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefaloridine%5D&body=Drug%3A%20cefaloridine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefaloridine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
