<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;pralidoxime&quot;}]"></div>

# pralidoxime

- **generic name:** pralidoxime
- **ATC codes:** `V03AB04`, `V03AB54`
- **DrugBank:** [DB00733](https://go.drugbank.com/drugs/DB00733) · **PubChem:** [CID 5353894](https://pubchem.ncbi.nlm.nih.gov/compound/5353894)
- **molar mass:** 137.1592 g/mol (C7H9N2O) — DrugBank
- **groups:** approved, vet_approved

## About

Pralidoxime is an antidote that reactivates cholinesterase, used to treat poisoning by organophosphate pesticides and nerve agents. It is an approved medicine, also approved for veterinary use, and is widely available as an emergency antidote, typically given in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2735334](https://www.wikidata.org/wiki/Q2735334) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Houzé_2010_ChE_activity_2](drugs/drug_pralidoxime/pd_Houz_2010_ChE_activity_2.md) | blood cholinesterase activity (in vivo) ← pralidoxime · indirect response — drug stimulates the production of blood cholinesterase activity (in vivo) | — | Houzé P et al., Pharmacokinetics and toxicodynamics of…, Toxicological sciences : an… (2010) | [10.1093/toxsci/kfq152](https://doi.org/10.1093/toxsci/kfq152) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Houzé_2010_ChE_activity](drugs/drug_pralidoxime/pd_Houz_2010_ChE_activity.md) | whole-blood cholinesterase activity (diethylparaoxon-inactivated, in vitro reactivation) ← pralidoxime · indirect response — drug stimulates the production of whole-blood cholinesterase activity (diethylparaoxon-inactivated, in vitro reactivation) | — | Houzé P et al., Pharmacokinetics and toxicodynamics of…, Toxicological sciences : an… (2010) | [10.1093/toxsci/kfq152](https://doi.org/10.1093/toxsci/kfq152) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:23 | 0:32 | 0/0/0 | 1/0/0 | 0/0/0 | 23,176/1,701 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_1986.pdf` | Green MD et al., Pharmacokinetics of pralidoxime chlorid…, Life sciences (1986) | popPK | 8 | [10.1016/0024-3205(86)90405-4](https://doi.org/10.1016/0024-3205(86)90405-4) | [3784779](https://pubmed.ncbi.nlm.nih.gov/3784779) | Rat PK study with compartmental model parameters (Vd, CL, ka, k10) but numeric values are not shown in the abstract text. |
| `Houzé_2010.pdf` | Houzé P et al., Pharmacokinetics and toxicodynamics of…, Toxicological sciences : an… (2010) | popPK | 6 | [10.1093/toxsci/kfq152](https://doi.org/10.1093/toxsci/kfq152) | [20498006](https://pubmed.ncbi.nlm.nih.gov/20498006) | PK-TD modeling of pralidoxime in rats, but the evidence only gives an in vitro EC50 (4.67 mg/l); actual PK parameters (CL, V) are not shown and likely reside in the model description/figures not provided. |
| `Jeevarathinam_1988.pdf` | Jeevarathinam K et al., Pharmacokinetics of pralidoxime chlorid…, Die Pharmazie (1988) | popPK | 6 | not captured | [3393576](https://pubmed.ncbi.nlm.nih.gov/3393576) | Rat PK study of pralidoxime with two-compartment model, but no numeric parameter values (half-life, CL, V) appear in the evidence text. |

<sub>queue written 2026-10-07T19:23:01.231442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbara_2009 | irrelevant | 2 | 0 | Pralidoxime is only a co-administered agent; the PK parameters reported (Cmax, AUC, compartmental models) are for diazepam/avizafone, not pralidoxime. |
| popPK | Abbara_2010 | relevant | 9 | 4 | Human population PK (two-compartment, first/zero-order absorption) of pralidoxime is reported, but the key parameter values (Vc, Ke, K12, K21, Ka) are in Table 4/5 which are not included; only AUC values appear in the evidence. |
| popPK | Capacio_2001 | irrelevant | 0 | 0 | The PK model and parameters are for diazepam, not pralidoxime, which is only a co-administered treatment agent. |
| popPK | Eterović_2011 | irrelevant | 0 | 0 | In-vitro hippocampal slice efficacy study; pralidoxime is only a comparator with no PK parameters reported. |
| popPK | Green_1986 | relevant | 8 | 4 | Rat PK study with compartmental model parameters (Vd, CL, ka, k10) but numeric values are not shown in the abstract text. |
| popPK | Hong_2013 | irrelevant | 0 | 0 | The study reports PK parameters for MMB4 DMS, a different drug; pralidoxime is only mentioned as the current fielded comparator, with no pralidoxime PK data. |
| popPK | Horn_2023 | irrelevant | 0 | 0 | In-vitro hepatotoxicity study with no PK disposition parameters for pralidoxime. |
| popPK | Houzé_2010 | relevant | 6 | 3 | PK-TD modeling of pralidoxime in rats, but the evidence only gives an in vitro EC50 (4.67 mg/l); actual PK parameters (CL, V) are not shown and likely reside in the model description/figures not provided. |
| popPK | Jeevarathinam_1988 | relevant | 6 | 3 | Rat PK study of pralidoxime with two-compartment model, but no numeric parameter values (half-life, CL, V) appear in the evidence text. |
| popPK | Moeller_2019 | irrelevant | 0 | 0 | The study reports PK of ketamine/norketamine in rats; pralidoxime is only mentioned as part of the co-administered SOC, with no pralidoxime parameters. |
| popPK | Reymond_2018 | irrelevant | 2 | 0 | PK modeling is of HI-6, not pralidoxime, which is only a comparator; no pralidoxime disposition parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
