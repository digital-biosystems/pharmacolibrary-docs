<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;raltitrexed&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Raltitrexed_Blair2004_model_validation&quot;,&quot;label&quot;:&quot;Blair_2004_model_validation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_validation.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_total_cohort&quot;,&quot;label&quot;:&quot;Blair_2004_total_cohort&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_total_cohort.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# raltitrexed

- **generic name:** raltitrexed
- **ATC codes:** `L01BA03`
- **DrugBank:** [DB00293](https://go.drugbank.com/drugs/DB00293) · **PubChem:** [CID 104758](https://pubchem.ncbi.nlm.nih.gov/compound/104758)
- **molar mass:** 458.488 g/mol (C21H22N4O6S) — DrugBank
- **groups:** approved, investigational

## About

Raltitrexed is an anticancer antimetabolite (a folic acid analogue) used to treat advanced colorectal cancer. It was withdrawn in some countries because of serious toxicity, but remains available and used in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15304877](https://www.wikidata.org/wiki/Q15304877) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| raltitrexed | parent | 458.488 | C21H22N4O6S | DrugBank | [104758](https://pubchem.ncbi.nlm.nih.gov/compound/104758) | Blair_2004, Horton_2005, Widemann_1999 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:18 | 1:05 | 2/2/1 | 0/0/0 | 0/0/0 | 60,216/9,026 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Blair_2004_model_validation](drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_validation.md) | ▶ model + simulator | 1-compartment, IV | 3 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Blair_2004_total_cohort](drugs/drug_raltitrexed/Raltitrexed_Blair2004_total_cohort.md) | ▶ model + simulator | 1-compartment, IV | 3 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Horton_2005_reference](drugs/drug_raltitrexed/Raltitrexed_Horton2005_reference.md) | — | 1-compartment (no model) | 4 | Horton TM et al., Phase I trial and pharmacokinetic study…, Clinical cancer research :… (2005) | [10.1158/1078-0432.CCR-04-1676](https://doi.org/10.1158/1078-0432.CCR-04-1676) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Blair_2004_model_development](drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_development.md) | — | 1-compartment (no model) | 0 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Widemann_1999_reference](drugs/drug_raltitrexed/Raltitrexed_Widemann1999_reference.md) | — | 1-compartment (no model) | 0 | Widemann BC et al., The plasma pharmacokinetics and cerebro…, Cancer chemotherapy and pha… (1999) | [10.1007/s002800051116](https://doi.org/10.1007/s002800051116) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=raltitrexed) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FPGS (target), TYMS (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Horton_2005.pdf` | Horton TM et al., Phase I trial and pharmacokinetic study…, Clinical cancer research :… (2005) | popPK | 10 | [10.1158/1078-0432.CCR-04-1676](https://doi.org/10.1158/1078-0432.CCR-04-1676) | [15756014](https://pubmed.ncbi.nlm.nih.gov/15756014) | The abstract explicitly reports quantitative PK parameters (clearance, volume of distribution, and half-lives) for raltitrexed in a two-compartment model. |
| `Royer_2021.pdf` | Royer B et al., Exposure-response analysis of Raltitrex…, British journal of clinical… (2021) | popPK | 10 | [10.1111/bcp.14519](https://doi.org/10.1111/bcp.14519) | [32789966](https://pubmed.ncbi.nlm.nih.gov/32789966) | The paper describes a population PK model for raltitrexed with specific covariates and a threshold AUC value, but standard parameter estimates (CL, V, Q) are not fully listed in the provided text, likely residing in tables or figures not included. |
| `Widemann_1999.pdf` | Widemann BC et al., The plasma pharmacokinetics and cerebro…, Cancer chemotherapy and pha… (1999) | popPK | 10 | [10.1007/s002800051116](https://doi.org/10.1007/s002800051116) | [10550563](https://pubmed.ncbi.nlm.nih.gov/10550563) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) and compartmental model details for raltitrexed in nonhuman primates. |
| `Zhu_2019.pdf` | Zhu L et al., Hepatic Artery and Peripheral Vein Phar…, Current drug metabolism (2019) | popPK | 10 | [10.2174/1389200220666190618100847](https://doi.org/10.2174/1389200220666190618100847) | [31237202](https://pubmed.ncbi.nlm.nih.gov/31237202) | The study reports quantitative pharmacokinetic parameters (clearance and volumes of distribution) for raltitrexed in swine, with the specific values present in the abstract. |

<sub>queue written 2026-10-07T17:17:53.638009+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Clarke_2000 | irrelevant | 4 | 4 | This is a review article that summarizes findings from multiple primary studies rather than reporting original experimental data, although it cites specific values like clearance (2.4 L/h) and half-life (260 h). |
| popPK | Ferrero_2002 | irrelevant | 2 | 0 | While the study reports on raltitrexed pharmacokinetics, the provided evidence mentions only qualitative findings regarding AUC and toxicity relationships, lacking specific quantitative disposition parameters (CL, V, t1/2) or compartmental model values. |
| popPK | Royer_2021 | relevant | 10 | 4 | The paper describes a population PK model for raltitrexed with specific covariates and a threshold AUC value, but standard parameter estimates (CL, V, Q) are not fully listed in the provided text, likely residing in tables or figures not included. |
| popPK | White_2003 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assay of synergism between three drugs, not a pharmacokinetic study reporting disposition parameters for raltitrexed. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:17 UTC</sub>
