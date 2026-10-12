<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tepotinib&quot;}]"></div>

# tepotinib

- **generic name:** tepotinib
- **ATC codes:** `L01EP02`, `L01EX21`
- **DrugBank:** [DB15133](https://go.drugbank.com/drugs/DB15133) · **PubChem:** not captured
- **molar mass:** 492.583 g/mol (C29H28N6O2) — DrugBank
- **groups:** approved, investigational

## About

Tepotinib is a kinase inhibitor used to treat non-small-cell lung cancer. It is authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088961](https://www.wikidata.org/wiki/Q27088961) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tepotinib | parent | 492.583 | C29H28N6O2 | DrugBank | — | Xiong_2022 |
| MSC2571109A | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:21 | 7:21 | 0/0/1 | 2/0/0 | 0/0/0 | 138,528/34,343 | openai / gpt-6-luna | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.733). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q69, Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Xiong_2022_reference](drugs/drug_tepotinib/Tepotinib_Xiong2022_reference.md) | — | parent + metabolite (no model) | 15 (+6 cov.) | Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_TV](drugs/drug_tepotinib/pd_Xiong_2021_TV.md) | tumor volume ← tepotinib · disease-progression model | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition.md) | phospho-MET inhibition ← tepotinib · indirect response — drug inhibits the production of phospho-MET inhibition | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_2](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_2.md) | phospho-MET inhibition ← tepotinib · indirect response — drug inhibits the production of phospho-MET inhibition | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_3](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_3.md) | phospho-MET inhibition ← tepotinib · direct log-linear effect | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_4](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_4.md) | phospho-MET inhibition ← tepotinib · direct Emax (saturable) effect | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_5](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_5.md) | phospho-MET inhibition ← tepotinib · direct sigmoid Emax (Hill) effect | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Xiong_2022_2_Albumin](drugs/drug_tepotinib/pd_Xiong_2022_2_Albumin.md) | serum albumin ← tepotinib · indirect response — drug inhibits the production of serum albumin | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Xiong_2022_2_OR](drugs/drug_tepotinib/pd_Xiong_2022_2_OR.md) | objective response (OR) ← tepotinib · model not identified | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Xiong_2022_2_QTcF](drugs/drug_tepotinib/pd_Xiong_2022_2_QTcF.md) | ΔQTcF interval ← tepotinib · direct linear effect | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Xiong_2022_2_edema](drugs/drug_tepotinib/pd_Xiong_2022_2_edema.md) | first edema event ← tepotinib · time-to-event model | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |

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

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falchook_2020.pdf` | Falchook GS et al., First-in-Man Phase I Trial of the Selec…, Clinical cancer research :… (2020) | popPK | 10 | [10.1158/1078-0432.CCR-19-2860](https://doi.org/10.1158/1078-0432.CCR-19-2860) | [31822497](https://pubmed.ncbi.nlm.nih.gov/31822497) | Human population-PK modeling is mentioned, but no numeric tepotinib disposition parameters are provided. |

<sub>queue written 2026-10-07T08:14:30.679510+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Falchook_2020 | relevant | 10 | 0 | Human population-PK modeling is mentioned, but no numeric tepotinib disposition parameters are provided. |
| popPK | Lu_2024 | irrelevant | 2 | 2 | This review describes tepotinib popPK findings but gives no numeric model parameters, and exposure comparisons are in a figure not provided. |
| popPK | Xiong_2021 | relevant | 9 | 1 | Tepotinib population and compartmental PK models are described, but parameter values are only reported in supplementary Tables S1 and S3, which are not provided. |
| popPK | Xiong_2022_2 | irrelevant | 1 | 0 | The paper reports exposure–response analyses, but tepotinib disposition parameters are only attributed to prior model [14] and are not provided here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:14 UTC</sub>
