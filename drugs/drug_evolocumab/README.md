<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;evolocumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter&quot;,&quot;label&quot;:&quot;Gibbs_2017_fixed_effects_population_mean_parameter&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Evolocumab_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evolocumab/Evolocumab_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# evolocumab

- **generic name:** evolocumab
- **ATC codes:** `C10AX13`
- **DrugBank:** [DB09303](https://go.drugbank.com/drugs/DB09303) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Evolocumab, a monoclonal antibody that lowers cholesterol, is used to treat dyslipidemias such as hypercholesterolemia and related conditions including coronary artery disease. It is authorised in the European Union and is widely used as a lipid-modifying agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15623825](https://www.wikidata.org/wiki/Q15623825) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:18 | 10:29 | 2/1/0 | 1/0/1 | 0/0/0 | 196,065/25,488 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.077). The first reading is what the record holds.">cross-check: disputed</span> | [Gibbs_2017_fixed_effects_population_mean_parameter](drugs/drug_evolocumab/Evolocumab_Gibbs2017_fixed_effects_population_mean_parameter.md) | ▶ model + simulator | 1-compartment, oral | 4 | Gibbs JP et al., Impact of Target-Mediated Elimination o…, Journal of clinical pharmac… (2017) | [10.1002/jcph.840](https://doi.org/10.1002/jcph.840) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Wang_2019_reference](drugs/drug_evolocumab/Evolocumab_Wang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Wang C et al., Lack of ethnic differences in the pharm…, British journal of clinical… (2019) | [10.1111/bcp.13767](https://doi.org/10.1111/bcp.13767) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.077). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Gibbs_2017_random_effects_intersubject_residual_variance](drugs/drug_evolocumab/Evolocumab_Gibbs2017_random_effects_intersubject_residual_va.md) | — | 1-compartment (no model) | 3 | Gibbs JP et al., Impact of Target-Mediated Elimination o…, Journal of clinical pharmac… (2017) | [10.1002/jcph.840](https://doi.org/10.1002/jcph.840) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Scherer_2017_LDLc](drugs/drug_evolocumab/pd_Scherer_2017_LDLc.md) | low-density lipoprotein cholesterol ← evolocumab · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | — | Scherer N et al., Alternative Treatment Regimens With the…, Journal of clinical pharmac… (2017) | [10.1002/jcph.866](https://doi.org/10.1002/jcph.866) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2018_LDL_C](drugs/drug_evolocumab/pd_Kuchimanchi_2018_LDL_C.md) | LDL-C ← evolocumab · direct Emax (saturable) effect | model (no simulator) | Kuchimanchi M et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-018-9592-y](https://doi.org/10.1007/s10928-018-9592-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=evolocumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PCSK9 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scherer_2017.pdf` | Scherer N et al., Alternative Treatment Regimens With the…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.866](https://doi.org/10.1002/jcph.866) | [28263403](https://pubmed.ncbi.nlm.nih.gov/28263403) | The paper describes a population PK/PD model for evolocumab, but the specific numeric parameter values are not present in the provided evidence text. |
| `Wang_2019.pdf` | Wang C et al., Lack of ethnic differences in the pharm…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13767](https://doi.org/10.1111/bcp.13767) | [30225890](https://pubmed.ncbi.nlm.nih.gov/30225890) | The paper reports specific quantitative population PK parameters (clearance 0.24 l/day, volume 2.75 l) for evolocumab in humans. |
| `Lu_2020.pdf` | Lu H et al., Pharmacokinetic/pharmacodynamic and saf…, International journal of cl… (2020) | popPK | 8 | [10.5414/CP203765](https://doi.org/10.5414/CP203765) | [32729822](https://pubmed.ncbi.nlm.nih.gov/32729822) | The study reports quantitative PK parameters (Cmax, AUC, t1/2, tmax) for evolocumab in humans, though it lacks compartmental model parameters like CL or V. |

<sub>queue written 2026-10-07T10:09:22.448225+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Peng_2024 | irrelevant | 1 | 0 | The study focuses on the PK/PD of a novel antibody (SAL003), using evolocumab only as a comparator for qualitative comparison without reporting evolocumab's specific quantitative parameters. |
| popPK | Revaiah_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing plaque morphology and transcriptomics, not a pharmacokinetic study, and contains no PK parameters for evolocumab. |
| popPK | Scherer_2017 | relevant | 10 | 0 | The paper describes a population PK/PD model for evolocumab, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Watts_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the substrate Lp(a), not for the drug evolocumab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:10 UTC</sub>
