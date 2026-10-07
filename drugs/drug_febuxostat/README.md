<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;febuxostat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Febuxostat_Kamel2022_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Febuxostat_Kamel2022_se_for_the_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_se_for_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_se_for_the_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# febuxostat

- **generic name:** febuxostat
- **ATC codes:** `M04AA03`
- **DrugBank:** [DB04854](https://go.drugbank.com/drugs/DB04854) · **PubChem:** [CID 134018](https://pubchem.ncbi.nlm.nih.gov/compound/134018)
- **molar mass:** 316.375 g/mol (C16H16N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Febuxostat is a xanthine oxidase inhibitor used to treat hyperuricemia and gout. It is authorised in the European Union and widely used as an antigout medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417296](https://www.wikidata.org/wiki/Q417296) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| febuxostat | parent | 316.375 | C16H16N2O3S | DrugBank | [134018](https://pubchem.ncbi.nlm.nih.gov/compound/134018) | Chen_2024, Iwama_2024, Kamel_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:25 | 2:46 | 4/0/1 | 0/0/3 | 0/0/0 | 299,246/18,385 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Iwama_2024_estimate](drugs/drug_febuxostat/Febuxostat_Iwama2024_estimate.md) | held back | 1-compartment, oral | 6 | Iwama R et al., An integrated population pharmacokineti…, Pharmacology research & per… (2024) | [10.1002/prp2.70032](https://doi.org/10.1002/prp2.70032) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Iwama_2024_median](drugs/drug_febuxostat/Febuxostat_Iwama2024_median.md) | held back | 1-compartment, oral | 6 | Iwama R et al., An integrated population pharmacokineti…, Pharmacology research & per… (2024) | [10.1002/prp2.70032](https://doi.org/10.1002/prp2.70032) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kamel_2022_estimate](drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate.md) | ▶ model + simulator | 2-compartment, oral | 5 (+2 cov.) | Kamel B et al., Population pharmacokinetic modelling of…, British journal of clinical… (2022) | [10.1111/bcp.15462](https://doi.org/10.1111/bcp.15462) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kamel_2022_se_for_the_estimate](drugs/drug_febuxostat/Febuxostat_Kamel2022_se_for_the_estimate.md) | ▶ model + simulator | 2-compartment, oral | 5 (+2 cov.) | Kamel B et al., Population pharmacokinetic modelling of…, British journal of clinical… (2022) | [10.1111/bcp.15462](https://doi.org/10.1111/bcp.15462) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95, Q61, Q76 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Chen_2024_reference](drugs/drug_febuxostat/Febuxostat_Chen2024_reference.md) | — | 3-compartment (no model) | 10 | Chen W et al., Population pharmacokinetic analysis of…, BMC pharmacology & toxicolo… (2024) | [10.1186/s40360-024-00783-1](https://doi.org/10.1186/s40360-024-00783-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Aksenov_2018_k_P](drugs/drug_febuxostat/pd_Aksenov_2018_k_P.md) | production rate of uric acid ← febuxostat · indirect response — drug inhibits the production of production rate of uric acid | model (no simulator) | Aksenov S et al., Individualized treatment strategies for…, Physiological reports (2018) | [10.14814/phy2.13614](https://doi.org/10.14814/phy2.13614) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kamel_2020_urate](drugs/drug_febuxostat/pd_Kamel_2020_urate.md) | serum urate ← febuxostat · direct Emax (saturable) effect | — | Kamel B et al., A pharmacokinetic-pharmacodynamic study…, British journal of clinical… (2020) | [10.1111/bcp.14357](https://doi.org/10.1111/bcp.14357) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Leander_2021_sUA](drugs/drug_febuxostat/pd_Leander_2021_sUA.md) | serum uric acid ← febuxostat · indirect response — drug inhibits the production of serum uric acid | model (no simulator) | Leander J et al., A semi-mechanistic exposure-response mo…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-021-09747-y](https://doi.org/10.1007/s10928-021-09747-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=febuxostat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A9` substrate, `UGT2B7` substrate, `XDH` inhibitor | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate, `UGT2B7` substrate, `XDH` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 4  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hira_2015.pdf` | Hira D et al., Population Pharmacokinetics and Therape…, Pharmacology (2015) | popPK | 10 | [10.1159/000434633](https://doi.org/10.1159/000434633) | [26183164](https://pubmed.ncbi.nlm.nih.gov/26183164) | The paper describes a population pharmacokinetic model for febuxostat with specific covariates (body weight) affecting CL and V, but the abstract provided does not contain the specific numeric parameter estimates (e.g., mean CL value in L/h or V in L). |
| `Rekić_2021.pdf` | Rekić D et al., Higher Febuxostat Exposure Observed in…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-020-00943-6](https://doi.org/10.1007/s40262-020-00943-6) | [32951150](https://pubmed.ncbi.nlm.nih.gov/32951150) | The study is a population PK model for febuxostat, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, only the model structure and a summary AUC ratio. |
| `Kamel_2020.pdf` | Kamel B et al., A pharmacokinetic-pharmacodynamic study…, British journal of clinical… (2020) | popPK | 8 | [10.1111/bcp.14357](https://doi.org/10.1111/bcp.14357) | [32386239](https://pubmed.ncbi.nlm.nih.gov/32386239) | The paper reports quantitative PK parameters (t1/2, Cmax) and describes a two-compartment model for febuxostat in healthy human subjects, but specific clearance (CL) and volume (V) values are not listed in the provided abstract text. |
| `Hirai_2018.pdf` | Hirai T et al., Evaluation of a pharmacokinetic-pharmac…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13666](https://doi.org/10.1111/bcp.13666) | [29876951](https://pubmed.ncbi.nlm.nih.gov/29876951) | The paper describes a PK-PD model for febuxostat, but the specific quantitative PK parameter values (CL, V, ka) are not present in the provided evidence, which focuses on serum urate prediction performance. |
| `Hoshide_2004.pdf` | Hoshide S et al., PK/PD and safety of a single dose of TM…, Nucleosides, nucleotides &… (2004) | popPK | 5 | [10.1081/NCN-200027377](https://doi.org/10.1081/NCN-200027377) | [15571212](https://pubmed.ncbi.nlm.nih.gov/15571212) | The study involves a PK/PD assessment of febuxostat in humans, but no specific quantitative parameter values (e.g., CL, V, t1/2) are provided in the evidence, only qualitative comparisons. |
| `Kamel_2017.pdf` | Kamel B et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2017) | popPK | 5 | [10.1007/s40262-016-0466-4](https://doi.org/10.1007/s40262-016-0466-4) | [27753003](https://pubmed.ncbi.nlm.nih.gov/27753003) | The text is a review (Kamel 2017 is a known review paper) that reports quantitative PK parameters (CL/F, Vss/F, t1/2) for febuxostat in healthy human subjects, but lacks original primary data or a population model. |

<sub>queue written 2026-10-07T03:23:16.163879+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aksenov_2018 | irrelevant | 3 | 2 | The study models uric acid disposition with febuxostat as a co-administered drug of interest (not the subject), and specific numeric PK parameters for febuxostat are not provided in the text (referenced in Appendices not included). |
| popPK | Fleischmann_2018 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics and pharmacodynamics of verinurad, using febuxostat as a co-administered comparator drug rather than the primary subject of PK parameter estimation. |
| popPK | Fulton_2019 | irrelevant | 0 | 0 | The study uses febuxostat as a hit compound for receptor pharmacology (mGlu2/4 PAM) rather than reporting a pharmacokinetic model or quantitative disposition parameters for febuxostat itself. |
| popPK | Hira_2015 | relevant | 10 | 4 | The paper describes a population pharmacokinetic model for febuxostat with specific covariates (body weight) affecting CL and V, but the abstract provided does not contain the specific numeric parameter estimates (e.g., mean CL value in L/h or V in L). |
| popPK | Hirai_2018 | relevant | 5 | 0 | The paper describes a PK-PD model for febuxostat, but the specific quantitative PK parameter values (CL, V, ka) are not present in the provided evidence, which focuses on serum urate prediction performance. |
| popPK | Hoshide_2004 | relevant | 5 | 0 | The study involves a PK/PD assessment of febuxostat in humans, but no specific quantitative parameter values (e.g., CL, V, t1/2) are provided in the evidence, only qualitative comparisons. |
| popPK | Kamel_2020 | relevant | 8 | 4 | The paper reports quantitative PK parameters (t1/2, Cmax) and describes a two-compartment model for febuxostat in healthy human subjects, but specific clearance (CL) and volume (V) values are not listed in the provided abstract text. |
| popPK | Leander_2021 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamics of verinurad and uses a previously published popPK model for febuxostat without reporting new quantitative PK parameters for it in this paper. |
| popPK | Muraki_2018 | irrelevant | 1 | 0 | The study reports a population pharmacodynamic (PPD) model for uric acid levels, not pharmacokinetic (PK) parameters for febuxostat. |
| popPK | Park_2022 | irrelevant | 0 | 0 | The study is a retrospective clinical outcome analysis comparing renal progression in CKD patients treated with allopurinol vs. febuxostat, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Puhl_2022 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of adenosine receptor binding and signaling, not a pharmacokinetic study, and contains no disposition parameters (CL, V, etc.) for febuxostat. |
| popPK | Rekić_2021 | relevant | 10 | 2 | The study is a population PK model for febuxostat, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, only the model structure and a summary AUC ratio. |
| popPK | Sun_2014 | irrelevant | 0 | 0 | This is a pharmacodynamic meta-analysis modeling urate-lowering response rates (Tmax, Emax), not a pharmacokinetic study reporting disposition parameters for febuxostat. |
| popPK | Uematsu_2026 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of eGFR slopes comparing dotinurad and febuxostat, containing no pharmacokinetic parameters (CL, V, ka, etc.) for febuxostat. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:23 UTC</sub>
