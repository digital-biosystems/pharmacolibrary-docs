<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nintedanib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nintedanib_Schmid2018_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nintedanib_Schmid2018v2_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nintedanib

- **generic name:** nintedanib
- **ATC codes:** `L01EX09`, `L01XE3`
- **DrugBank:** [DB09079](https://go.drugbank.com/drugs/DB09079) · **PubChem:** [CID 9809715](https://pubchem.ncbi.nlm.nih.gov/compound/9809715)
- **molar mass:** 539.6248 g/mol (C31H33N5O4) — DrugBank
- **groups:** approved, investigational

## About

Nintedanib is a protein kinase inhibitor used to treat idiopathic pulmonary fibrosis and other interstitial lung diseases, and also certain lung cancers. It is authorised in the European Union for several fibrotic lung conditions and non-small-cell lung cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15149723](https://www.wikidata.org/wiki/Q15149723) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nintedanib | parent | 539.625 | C31H33N5O4 | DrugBank | [9809715](https://pubchem.ncbi.nlm.nih.gov/compound/9809715) | Schmid_2018, Schmid_2018_2 |
| BIBF 1202 | metabolite | 525.609 | C30H31N5O4 | PubChem | [135461425](https://pubchem.ncbi.nlm.nih.gov/compound/135461425) | Schmid_2018_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:23 | 5:01 | 2/0/0 | 2/1/0 | 0/0/0 | 132,562/29,432 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Schmid_2018_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Schmid U et al., Population pharmacokinetics of nintedan…, Pulmonary pharmacology & th… (2018) | [10.1016/j.pupt.2017.11.004](https://doi.org/10.1016/j.pupt.2017.11.004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Schmid_2018_2_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Schmid U et al., Population pharmacokinetics of nintedan…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-017-3452-0](https://doi.org/10.1007/s00280-017-3452-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hartmann_2026_2_FVC](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC.md) | absolute FVC ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hartmann_2026_2_FVC_Z_score](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC_Z_score.md) | FVC Z‐score ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hartmann_2026_2_FVC_predicted](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC_predicted.md) | FVC %predicted ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vaskeikina_2026_FVC](drugs/drug_nintedanib/pd_Vaskeikina_2026_FVC.md) | change from baseline in forced vital capacity ← nintedanib · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hartmann_2026_FVC](drugs/drug_nintedanib/pd_Hartmann_2026_FVC.md) | FVC %predicted ← nintedanib · direct Emax (saturable) effect | model (no simulator) | Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hartmann_2026_FVC_2](drugs/drug_nintedanib/pd_Hartmann_2026_FVC_2.md) | FVC Z-score ← nintedanib · direct Emax (saturable) effect | model (no simulator) | Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nintedanib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` unknown | DrugBank actor |
| absorption | mammary gland | `ABCG2` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` unknown | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` unknown | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `SLC22A1` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FLT1 (inhibitor), FLT3 (inhibitor), FLT4 (inhibitor), KDR (inhibitor), LCK (inhibitor), LYN (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor), SRC (inhibitor), UGT1A10 (substrate), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schmid_2018.pdf` | Schmid U et al., Population pharmacokinetics of nintedan…, Pulmonary pharmacology & th… (2018) | popPK | 10 | [10.1016/j.pupt.2017.11.004](https://doi.org/10.1016/j.pupt.2017.11.004) | [29133080](https://pubmed.ncbi.nlm.nih.gov/29133080) | A population PK model reports numeric nintedanib absorption, clearance, and volume estimates. |
| `Agema_2024.pdf` | Agema BC et al., Clinical implications of nintedanib pha…, Biomedicine & pharmacothera… (2024) | popPK | 9 | [10.1016/j.biopha.2024.117341](https://doi.org/10.1016/j.biopha.2024.117341) | [39191023](https://pubmed.ncbi.nlm.nih.gov/39191023) | A population-PK model was developed, but no numeric disposition parameter values are present in the provided evidence. |
| `Epstein-Shochet_2020.pdf` | Epstein-Shochet G et al., Inhalation: A means to explore and opti…, Pulmonary pharmacology & th… (2020) | popPK | 8 | [10.1016/j.pupt.2020.101933](https://doi.org/10.1016/j.pupt.2020.101933) | [32750409](https://pubmed.ncbi.nlm.nih.gov/32750409) | The study investigates nintedanib pharmacokinetics, but no numeric disposition parameter values are present in the evidence. |

<sub>queue written 2026-10-07T03:18:52.593446+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2024 | relevant | 9 | 1 | A population-PK model was developed, but no numeric disposition parameter values are present in the provided evidence. |
| popPK | Chioni_2026 | irrelevant | 0 | 0 | This real-world clinical outcomes study reports no quantitative nintedanib pharmacokinetic parameters. |
| popPK | Epstein-Shochet_2020 | relevant | 8 | 1 | The study investigates nintedanib pharmacokinetics, but no numeric disposition parameter values are present in the evidence. |
| popPK | Hartmann_2026 | relevant | 9 | 1 | The paper develops a nintedanib population-PK model, but its parameter estimates are only referenced in Table S5, which is not provided. |
| popPK | Hartmann_2026_2 | irrelevant | 2 | 1 | This is a human exposure–efficacy analysis, not a disposition-PK study; popPK details are only referenced in supporting information not provided. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | This post hoc clinical outcomes analysis reports FVC differences, not nintedanib pharmacokinetic parameters. |
| popPK | Koziar_2024 | irrelevant | 0 | 0 | This human outcomes study reports no quantitative pharmacokinetic disposition parameters for nintedanib. |
| popPK | Lalla_2025 | irrelevant | 0 | 0 | This human cohort reports clinical outcomes and dosing, not nintedanib pharmacokinetic parameters. |
| popPK | Lenz_2019 | irrelevant | 0 | 0 | This is a human quality-of-life study and reports no nintedanib pharmacokinetic parameters. |
| popPK | Raghu_2018 | irrelevant | 0 | 0 | Nintedanib was only allowed as concomitant therapy, and no pharmacokinetic parameters are reported. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | This is a human efficacy meta-analysis; it reports treatment effects, not nintedanib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:19 UTC</sub>
