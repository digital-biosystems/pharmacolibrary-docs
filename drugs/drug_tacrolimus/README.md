<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tacrolimus&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tacrolimus_AbdelKahaar2023v2_reference&quot;,&quot;label&quot;:&quot;Abdel-Kahaar_2023_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_AbdelKahaar2023v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Chen2023_base&quot;,&quot;label&quot;:&quot;Chen_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Chen2023_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Chen2023_final&quot;,&quot;label&quot;:&quot;Chen_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Chen2023_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Franken2022_reference&quot;,&quot;label&quot;:&quot;Franken_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Franken2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Hou2025_reference&quot;,&quot;label&quot;:&quot;Hou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Hou2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tacrolimus_Paschier2023_reference&quot;,&quot;label&quot;:&quot;Paschier_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tacrolimus/Tacrolimus_Paschier2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tacrolimus

- **generic name:** tacrolimus
- **ATC codes:** `D11AH01`, `D11AX14`, `L04AD02`
- **DrugBank:** [DB00864](https://go.drugbank.com/drugs/DB00864) · **PubChem:** [CID 445643](https://pubchem.ncbi.nlm.nih.gov/compound/445643)
- **molar mass:** 804.0182 g/mol (C44H69NO12) — DrugBank
- **groups:** approved, investigational

## About

Tacrolimus is an immunosuppressive drug used to prevent organ transplant rejection and to treat conditions such as atopic dermatitis, ulcerative colitis, and graft-versus-host disease. It is widely used and authorised in the European Union, available as an approved medicine for transplant and dermatological indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411648](https://www.wikidata.org/wiki/Q411648) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tacrolimus | parent | 804.018 | C44H69NO12 | DrugBank | [445643](https://pubchem.ncbi.nlm.nih.gov/compound/445643) | Chen_2023, Franken_2022, Paschier_2023, Xiang_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:41 | 9:02 | 6/0/3 | 2/0/0 | 0/0/0 | 275,649/46,633 | einfracz / qwen3.8-27b | 23 | 5/6 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Abdel-Kahaar_2023_2_reference](drugs/drug_tacrolimus/Tacrolimus_AbdelKahaar2023v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Abdel-Kahaar E et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01246-2](https://doi.org/10.1007/s40262-023-01246-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2023_base](drugs/drug_tacrolimus/Tacrolimus_Chen2023_base.md) | ▶ model + simulator | 1-compartment, oral | 4 | Chen D et al., Population PK/PD model of tacrolimus fo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12966](https://doi.org/10.1002/psp4.12966) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2023_final](drugs/drug_tacrolimus/Tacrolimus_Chen2023_final.md) | ▶ model + simulator | 1-compartment, oral | 4 (+4 cov.) | Chen D et al., Population PK/PD model of tacrolimus fo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12966](https://doi.org/10.1002/psp4.12966) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Franken_2022_reference](drugs/drug_tacrolimus/Tacrolimus_Franken2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Franken LG et al., A Population Pharmacokinetic Model of W…, European journal of drug me… (2022) | [10.1007/s13318-022-00767-8](https://doi.org/10.1007/s13318-022-00767-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Hou_2025_reference](drugs/drug_tacrolimus/Tacrolimus_Hou2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hou J et al., Tacrolimus population pharmacokinetic m…, Naunyn-Schmiedeberg's archi… (2025) | [10.1007/s00210-025-03982-7](https://doi.org/10.1007/s00210-025-03982-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Paschier_2023_reference](drugs/drug_tacrolimus/Tacrolimus_Paschier2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Paschier A et al., Tacrolimus population pharmacokinetics…, British journal of clinical… (2023) | [10.1111/bcp.15857](https://doi.org/10.1111/bcp.15857) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub><br><sub>blocking: C2_base_Q27 failed (ratio 1.3644)</sub><br><sub>route_to: `human_review`</sub> | [Xiang_2025_base](drugs/drug_tacrolimus/Tacrolimus_Xiang2025_base.md) | — | 1-compartment (no model) | 4 | Xiang Q et al., Population Pharmacokinetic/Pharmacodyna…, Drug design, development an… (2025) | [10.2147/DDDT.S542786](https://doi.org/10.2147/DDDT.S542786) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Xiang_2025_final](drugs/drug_tacrolimus/Tacrolimus_Xiang2025_final.md) | — | 1-compartment (no model) | 4 (+3 cov.) | Xiang Q et al., Population Pharmacokinetic/Pharmacodyna…, Drug design, development an… (2025) | [10.2147/DDDT.S542786](https://doi.org/10.2147/DDDT.S542786) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Xiang_2025_reference](drugs/drug_tacrolimus/Tacrolimus_Xiang2025_reference.md) | — | — (no model) | 0 | Xiang Q et al., Population Pharmacokinetic/Pharmacodyna…, Drug design, development an… (2025) | [10.2147/DDDT.S542786](https://doi.org/10.2147/DDDT.S542786) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2023_TS](drugs/drug_tacrolimus/pd_Chen_2023_TS.md) | Total quantitative score (TS) of quantitative MG scores ← tacrolimus · direct Emax (saturable) effect | — | Chen D et al., Population PK/PD model of tacrolimus fo…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12966](https://doi.org/10.1002/psp4.12966) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Xiang_2025_FPG](drugs/drug_tacrolimus/pd_Xiang_2025_FPG.md) | fasting plasma glucose ← tacrolimus · direct linear effect | model (no simulator) | Xiang Q et al., Population Pharmacokinetic/Pharmacodyna…, Drug design, development an… (2025) | [10.2147/DDDT.S542786](https://doi.org/10.2147/DDDT.S542786) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Xiang_2025_eGFR](drugs/drug_tacrolimus/pd_Xiang_2025_eGFR.md) | estimated glomerular filtration rate ← tacrolimus · direct Emax (saturable) effect | model (no simulator) | Xiang Q et al., Population Pharmacokinetic/Pharmacodyna…, Drug design, development an… (2025) | [10.2147/DDDT.S542786](https://doi.org/10.2147/DDDT.S542786) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tacrolimus) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCA5 (substrate), FKBP1A (inhibitor), PPP3CA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 396 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 9  ·  extracted 6  ·  needs_review 2  ·  rejected 0  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Umpiérrez_2026.pdf` | Umpiérrez M et al., Accelerating tacrolimus model-informed…, British journal of clinical… (2026) | popPK | 10 | [10.1002/bcp.70447](https://doi.org/10.1002/bcp.70447) | [41673983](https://pubmed.ncbi.nlm.nih.gov/41673983) | The study evaluates tacrolimus population PK models in kidney transplant recipients, but the specific quantitative parameter values (CL, V, etc.) are not provided in the extracted text or evidence. |
| `Lloberas_2023.pdf` | Lloberas N et al., A prospective controlled, randomized cl…, Kidney international (2023) | popPK | 8 | [10.1016/j.kint.2023.06.021](https://doi.org/10.1016/j.kint.2023.06.021) | [37391040](https://pubmed.ncbi.nlm.nih.gov/37391040) | The paper describes a population pharmacokinetic study of tacrolimus in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Lancia_2015.pdf` | Lancia P et al., Choosing the right dose of tacrolimus, Archives of disease in chil… (2015) | popPK | 5 | [10.1136/archdischild-2013-305888](https://doi.org/10.1136/archdischild-2013-305888) | [25416736](https://pubmed.ncbi.nlm.nih.gov/25416736) | The text describes a population pharmacokinetic-pharmacogenetic model for tacrolimus, but no quantitative parameter values (CL, V, etc.) are provided in the evidence. |

<sub>queue written 2026-10-07T15:33:43.795265+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Kahaar_2023_2 | irrelevant | 0 | 0 | The paper is a review of voclosporin pharmacokinetics, and while tacrolimus is mentioned as a comparator with some PK/PD values, it is not the subject drug. |
| popPK | Brunet_2019_2 | irrelevant | 2 | 0 | This is a consensus/review report discussing therapeutic drug monitoring strategies and recommendations rather than reporting original quantitative population PK parameter estimates (CL, V, etc.). |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of the efficacy (proteinuria reduction) of tacrolimus, not a pharmacokinetic study; it reports pharmacodynamic parameters (Emax, ET50) but no disposition parameters (CL, V, ka) for the drug. |
| popPK | Coste_2023 | irrelevant | 0 | 0 | The study measures drug concentrations in blood and tissues but does not report pharmacokinetic disposition parameters (such as clearance, volume of distribution, or rate constants) for tacrolimus. |
| popPK | Fontova_2023 | irrelevant | 3 | 2 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2z) for tacrolimus in a compartmental (intracellular vs. whole blood) context, but lacks the standard quantitative disposition parameters (CL, V, Q) or population PK model required for extraction. |
| popPK | Hoffert_2024 | relevant | 5 | 2 | This is a review of population PK models for tacrolimus which provides qualitative overviews and references original studies, but specific numeric parameter values are largely contained in referenced figures or supplementary tables not fully provided in the text. |
| popPK | Kirubakaran_2020 | irrelevant | 0 | 0 | This is a systematic review that summarizes the findings of other studies but does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for tacrolimus in the provided text. |
| popPK | Lancia_2015 | relevant | 5 | 0 | The text describes a population pharmacokinetic-pharmacogenetic model for tacrolimus, but no quantitative parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Lloberas_2023 | relevant | 8 | 0 | The paper describes a population pharmacokinetic study of tacrolimus in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Paintaud_2004 | irrelevant | 0 | 0 | The text is a conceptual review discussing biomarkers and PK-PD modeling principles for immunosuppressants in general, containing no original quantitative PK parameter values for tacrolimus. |
| popPK | Shihab_2014 | irrelevant | 0 | 0 | The paper is a review discussing pharmacokinetic interactions and clinical outcomes in renal transplantation, and it does not report original quantitative PK parameter values (CL, V, Q, ka) for tacrolimus. |
| popPK | Umpiérrez_2026 | relevant | 10 | 0 | The study evaluates tacrolimus population PK models in kidney transplant recipients, but the specific quantitative parameter values (CL, V, etc.) are not provided in the extracted text or evidence. |
| popPK | Wang_2023 | irrelevant | 2 | 1 | This is a systematic review summarizing other studies, and while it reports a range for CL/F, it does not present original quantitative population PK parameter estimates (fixed effect values, variances) from a primary modeling study. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This is a clinical outcome study on tacrolimus exposure and graft function, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.). |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The paper is a review of sirolimus pharmacokinetics and pharmacodynamics; tacrolimus is mentioned only as a comparator or co-administered drug, and no PK parameters for tacrolimus are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:37 UTC</sub>
