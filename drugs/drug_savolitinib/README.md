<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;savolitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Savolitinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_savolitinib/Savolitinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# savolitinib

- **generic name:** savolitinib
- **ATC codes:** `L01EP03`
- **DrugBank:** [DB12048](https://go.drugbank.com/drugs/DB12048) · **PubChem:** [CID 68289010](https://pubchem.ncbi.nlm.nih.gov/compound/68289010)
- **molar mass:** 345.37 g/mol (C17H15N9) — DrugBank
- **groups:** investigational

## About

Savolitinib is an investigational anticancer drug, a c-MET kinase inhibitor being studied as a protein kinase inhibitor for treating cancer. It is not yet an approved medicine and has no marketing authorisation in the European Union; it remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27254463](https://www.wikidata.org/wiki/Q27254463) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| savolitinib | parent | 345.37 | C17H15N9 | DrugBank | [68289010](https://pubchem.ncbi.nlm.nih.gov/compound/68289010) | Jones_2023 |
| AZ5104 | metabolite | 485.592 | C27H31N7O2 | PubChem | [71496460](https://pubchem.ncbi.nlm.nih.gov/compound/71496460) | Jones_2023 |
| osimertinib | metabolite | 499.619 | C28H33N7O2 | PubChem | [71496458](https://pubchem.ncbi.nlm.nih.gov/compound/71496458) | Jones_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:47 | 4:30 | 0/1/0 | 4/1/0 | 0/0/0 | 70,313/24,096 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `engineer`</sub> | [Jones_2023_reference](drugs/drug_savolitinib/Savolitinib_Jones2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gu_2019_Hs746t](drugs/drug_savolitinib/pd_Gu_2019_Hs746t.md) | Hs746t tumor reduction ← savolitinib · delayed effect through transit (transduction) compartments | — | Gu Y et al., Preclinical pharmacokinetics, dispositi…, European journal of pharmac… (2019) | [10.1016/j.ejps.2019.05.016](https://doi.org/10.1016/j.ejps.2019.05.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gu_2019_cMet](drugs/drug_savolitinib/pd_Gu_2019_cMet.md) | cMet inhibition ← savolitinib · direct Emax (saturable) effect | — | Gu Y et al., Preclinical pharmacokinetics, dispositi…, European journal of pharmac… (2019) | [10.1016/j.ejps.2019.05.016](https://doi.org/10.1016/j.ejps.2019.05.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2021_Tumour_growth](drugs/drug_savolitinib/pd_Jones_2021_Tumour_growth.md) | Tumour growth ← savolitinib · model not identified | — | Jones RDO et al., A pharmacokinetic-pharmacodynamic model…, British journal of pharmaco… (2021) | [10.1111/bph.15301](https://doi.org/10.1111/bph.15301) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2021_pMET](drugs/drug_savolitinib/pd_Jones_2021_pMET.md) | MET phosphorylation ← savolitinib · inhibition effect | — | Jones RDO et al., A pharmacokinetic-pharmacodynamic model…, British journal of pharmaco… (2021) | [10.1111/bph.15301](https://doi.org/10.1111/bph.15301) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_TGI](drugs/drug_savolitinib/pd_Jones_2023_TGI.md) | tumor growth ← savolitinib and osimertinib · disease-progression model | model (no simulator) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_pEGFR](drugs/drug_savolitinib/pd_Jones_2023_pEGFR.md) | pEGFR ← savolitinib · indirect response — drug stimulates the loss of pEGFR | model (no simulator) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_pMET](drugs/drug_savolitinib/pd_Jones_2023_pMET.md) | pMET ← savolitinib · direct Emax (saturable) effect | model (no simulator) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Schalkwijk_2021_QTcF](drugs/drug_savolitinib/pd_Schalkwijk_2021_QTcF.md) | ΔΔQTcF ← savolitinib and M2 (active moiety) · direct linear effect | — | Schalkwijk S et al., Parent and Metabolite Concentration-QT…, The AAPS journal (2021) | [10.1208/s12248-021-00573-1](https://doi.org/10.1208/s12248-021-00573-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Schalkwijk_2021_QTcF_2](drugs/drug_savolitinib/pd_Schalkwijk_2021_QTcF_2.md) | ΔΔQTcF ← savolitinib and M2 (active moiety) · direct Emax (saturable) effect | model (no simulator) | Schalkwijk S et al., Parent and Metabolite Concentration-QT…, The AAPS journal (2021) | [10.1208/s12248-021-00573-1](https://doi.org/10.1208/s12248-021-00573-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span> | [Gavine_2015_cell_growth](drugs/drug_savolitinib/pd_Gavine_2015_cell_growth.md) | cell growth ← volitinib · inhibition effect | — | Gavine PR et al., Volitinib, a potent and highly selectiv…, Molecular oncology (2015) | [10.1016/j.molonc.2014.08.015](https://doi.org/10.1016/j.molonc.2014.08.015) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=savolitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MET (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gu_2019.pdf` | Gu Y et al., Preclinical pharmacokinetics, dispositi…, European journal of pharmac… (2019) | popPK | 9 | [10.1016/j.ejps.2019.05.016](https://doi.org/10.1016/j.ejps.2019.05.016) | [31132401](https://pubmed.ncbi.nlm.nih.gov/31132401) | The paper reports preclinical savolitinib PK modeling, but no numeric disposition parameter values are provided in the evidence. |
| `Jones_2021.pdf` | Jones RDO et al., A pharmacokinetic-pharmacodynamic model…, British journal of pharmaco… (2021) | popPK | 8 | [10.1111/bph.15301](https://doi.org/10.1111/bph.15301) | [33125717](https://pubmed.ncbi.nlm.nih.gov/33125717) | A savolitinib PK/PD model was developed in mice, but no numeric disposition parameters are provided. |

<sub>queue written 2026-10-07T06:43:21.144713+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gavine_2015 | irrelevant | 0 | 0 | The paper reports pharmacology and tumor efficacy, but no quantitative savolitinib disposition parameters. |
| popPK | Gu_2019 | relevant | 9 | 1 | The paper reports preclinical savolitinib PK modeling, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Jones_2021 | relevant | 8 | 1 | A savolitinib PK/PD model was developed in mice, but no numeric disposition parameters are provided. |
| popPK | Schalkwijk_2021 | irrelevant | 1 | 0 | This is an exposure–QT analysis, not a study reporting savolitinib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:43 UTC</sub>
