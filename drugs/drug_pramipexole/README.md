<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;pramipexole&quot;}]"></div>

# pramipexole

- **generic name:** pramipexole
- **ATC codes:** `N04BC05`
- **DrugBank:** [DB00413](https://go.drugbank.com/drugs/DB00413) · **PubChem:** [CID 119570](https://pubchem.ncbi.nlm.nih.gov/compound/119570)
- **molar mass:** 211.327 g/mol (C10H17N3S) — DrugBank
- **groups:** approved, investigational

## About

Pramipexole is a dopamine agonist used to treat Parkinson's disease and restless legs syndrome. It is an approved medicine with several authorised products in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421304](https://www.wikidata.org/wiki/Q421304) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2019_CGI_I](drugs/drug_pramipexole/pd_Zhang_2019_CGI_I.md) | Clinical Global Impression Improvement (CGI-I) scale response rate ← pramipexole · direct Emax (saturable) effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhang_2019_IRLS](drugs/drug_pramipexole/pd_Zhang_2019_IRLS.md) | Change in International Restless Leg Syndrome Study Group (IRLS) rating scale score ← pramipexole · direct Emax (saturable) effect | — | Zhang N et al., Quantitative Comparison of the Efficaci…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1426](https://doi.org/10.1002/jcph.1426) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Presgraves_2004_protection_against_MPP_induced_neurotoxicity_cell_viability](drugs/drug_pramipexole/pd_Presgraves_2004_protection_against_MPP_induced_neurotoxicity.md) | protection against MPP(+)-induced neurotoxicity (cell viability) ← pramipexole · stimulation effect | — | Presgraves SP et al., Involvement of dopamine D(2)/D(3) recep…, Experimental neurology (2004) | [10.1016/j.expneurol.2004.06.021](https://doi.org/10.1016/j.expneurol.2004.06.021) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:20 | 0:33 | 0/0/0 | 1/1/0 | 0/0/0 | 34,432/2,229 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soto_2010.pdf` | Soto E et al., Population in vitro-in vivo correlation…, Pharmaceutical research (2010) | popPK | 8 | [10.1007/s11095-009-0027-8](https://doi.org/10.1007/s11095-009-0027-8) | [20039105](https://pubmed.ncbi.nlm.nih.gov/20039105) | Population PK model (two-compartment, first-order absorption) for pramipexole in humans, but numeric parameter values are not shown in the evidence, likely in tables/figures not provided. |
| `Cardon-Dunbar_2017.pdf` | Cardon-Dunbar A et al., Pramipexole Overdose Associated with Vi…, Journal of medical toxicolo… (2017) | popPK | 5 | [10.1007/s13181-017-0615-7](https://doi.org/10.1007/s13181-017-0615-7) | [28547577](https://pubmed.ncbi.nlm.nih.gov/28547577) | Human overdose case with measured pramipexole concentrations and a one-compartment fit reporting an elimination half-life (18 h), but no CL or V values are given. |

<sub>queue written 2026-10-06T14:19:50.153155+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ferger_2010 | irrelevant | 4 | 2 | PK-PD microdialysis study in rats, but no numeric disposition parameters (CL, V, t½) are reported in the evidence; only qualitative exposure profiles. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | In-vitro pharmacology study of D1 receptor activity; pramipexole is only a test agent with no PK parameters. |
| popPK | Presgraves_2004 | irrelevant | 0 | 0 | In-vitro neuroprotection study with no pharmacokinetic disposition parameters for pramipexole. |
| popPK | Singhal_2021 | irrelevant | 3 | 1 | This is a transdermal delivery/iontophoresis study; no numeric PK disposition parameters (CL, V, half-life) for pramipexole appear in the evidence, and any values likely live in figures/supplements not provided. |
| popPK | Soto_2010 | relevant | 8 | 3 | Population PK model (two-compartment, first-order absorption) for pramipexole in humans, but numeric parameter values are not shown in the evidence, likely in tables/figures not provided. |
| popPK | Tadori_2014 | irrelevant | 1 | 1 | A review of therapeutic plasma concentrations vs receptor pharmacology, with no PK disposition parameters (CL, V, ka, half-life, model) for pramipexole. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | This is a pharmacodynamic efficacy meta-analysis of RLS drugs; no PK disposition parameters for pramipexole are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
