<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dabigatran etexilate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;DabigatranEtexilate_Liu2022_reference&quot;,&quot;label&quot;:&quot;Liu_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Liu2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# dabigatran etexilate

- **generic name:** dabigatran etexilate
- **ATC codes:** `B01AE07`
- **DrugBank:** [DB06695](https://go.drugbank.com/drugs/DB06695)
- **groups:** approved, investigational

## About

**Description.** Dabigatran etexilate is an oral prodrug that is hydrolyzed to the competitive and reversible direct thrombin inhibitor [dabigatran].[A177463, A6970, L34675, L34680] Dabigatran etexilate may be used to decrease the risk of venous thromboembolic events in patients in whom anticoagulation therapy is indicated.[A177463] In contrast to warfarin, because its anticoagulant effects are predictable, lab monitoring is not necessary.[A177463] Dabigatran etexilate was approved by the FDA in 2010.[L6022]

**Indication.** Dabigatran etexilate is available in both oral pellet and capsule form. Dabigatran etexilate pellets are indicated for the treatment of venous thromboembolic events (VTE) in pediatric patients between three months and 12 years of age who have been treated with a parenteral anticoagulant for at least 5 days. They are also indicated in the same age group to reduce the risk of recurrence of VTE in patients who have been previously treated.[L34675]

In capsule form, dabigatran etexilate is indicated in adults to reduce the risk of stroke and systemic embolism associated with non-valvular atrial fibrillation and for the treatment of deep venous thrombosis (DVT) and pulmonary embolism (PE) in patients who have been treated with a parenteral anticoagulant for 5-10 days. It is also indicated in adults to reduce the risk of recurrence of DVT and PE in patients who have been previously treated and for the prophylaxis of DVT and PE in patients who have undergone hip replacement surgery. Lastly, it is indicated in pediatric patients between eight and 18 years of age for the treatment of venous thromboembolic events (VTE) in patients who have been treated with a parenteral anticoagulant for at least 5 days and to reduce the risk of recurrence of VTE in patients who have been previously treated.[L34680]

Dabigatran etexilate is also approved by the EMA to prevent VTE in adult patients. For pediatric patients, Dabigatran etexilate is used to treat TVE and prevent recurrent TVE for patients from birth to less than 18 years of age.[L46856]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 17:23 | 2:43 | 0/1/0 | 0/0/0 | 0/0/0 | 21,298/5,144 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2022_reference](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Liu2022_reference.md) | Liu YO et al., Population pharmacokinetic analysis for…, Frontiers in cardiovascular… (2022) | [10.3389/fcvm.2022.998751](https://doi.org/10.3389/fcvm.2022.998751) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dabigatran_etexilate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | bile duct | <sub>“…hich are present in only trace amounts in plasma, urine, or feces. These include a variety…”</sub> | prose |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CES2` substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…radioactivity is recovered in urine and 86% is recovered in feces.[L34675, L34680]…”</sub> | prose |
| excretion | kidney | <sub>“…Dabigatran is primarily eliminated in the urine. Following oral administration of radiolab…”</sub> | prose |

<sub>Actors without a tissue in the table: F2 (inhibitor), NQO2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Röshammar_2021.pdf` | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | popPK | 10 | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) | [33636042](https://pubmed.ncbi.nlm.nih.gov/33636042) | The paper describes a population PK model for dabigatran etexilate, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Ollier_2015.pdf` | Ollier E et al., In vitro and in vivo evaluation of drug…, Fundamental & clinical phar… (2015) | popPK | 9 | [10.1111/fcp.12154](https://doi.org/10.1111/fcp.12154) | [26392328](https://pubmed.ncbi.nlm.nih.gov/26392328) | The paper describes a population PK study for dabigatran etexilate, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-06T16:28:40.989655+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Halton_2016 | irrelevant | 2 | 0 | The study reports only a single dose-normalized trough concentration and validates an existing adult model, without providing original quantitative PK parameters (CL, V, ka) for dabigatran etexilate. |
| popPK | Liu_2024 | irrelevant | 2 | 0 | The study is a modeling/simulation paper that retrieves PK parameters from previously published literature rather than reporting original quantitative disposition parameters for dabigatran etexilate in the provided evidence. |
| popPK | Ollier_2015 | relevant | 9 | 0 | The paper describes a population PK study for dabigatran etexilate, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Röshammar_2021 | relevant | 10 | 0 | The paper describes a population PK model for dabigatran etexilate, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-05 17:23 UTC</sub>
