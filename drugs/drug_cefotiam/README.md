<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotiam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefotiam_Burlot2026_reference&quot;,&quot;label&quot;:&quot;Burlot_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotiam/Cefotiam_Burlot2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotiam_Irby2021_reference&quot;,&quot;label&quot;:&quot;Irby_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotiam/Cefotiam_Irby2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotiam_Shah2019_reference&quot;,&quot;label&quot;:&quot;Shah_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotiam/Cefotiam_Shah2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefotiam

- **generic name:** cefotiam
- **ATC codes:** `J01DC07`
- **DrugBank:** [DB00229](https://go.drugbank.com/drugs/DB00229) · **PubChem:** [CID 43708](https://pubchem.ncbi.nlm.nih.gov/compound/43708)
- **molar mass:** 525.628 g/mol (C18H23N9O4S3) — DrugBank
- **groups:** approved

## About

Cefotiam is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, given by injection, mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3009984](https://www.wikidata.org/wiki/Q3009984) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefotiam | parent | 525.628 | C18H23N9O4S3 | DrugBank | [43708](https://pubchem.ncbi.nlm.nih.gov/compound/43708) | Konishi_1984, Momose_1982, Shah_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:42 | 14:15 | 3/1/1 | 3/0/0 | 0/0/0 | 418,371/16,515 | einfracz / qwen3.8-27b | 19 | 1/13 | 19/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Burlot_2026_reference](drugs/drug_cefotiam/Cefotiam_Burlot2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Burlot C et al., PK and PK/PD Modeling of Bcl2 Inhibitor…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70288](https://doi.org/10.1002/psp4.70288) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Irby_2021_reference](drugs/drug_cefotiam/Cefotiam_Irby2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Irby DJ et al., Approaches to handling missing or "prob…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12611](https://doi.org/10.1002/psp4.12611) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shah_2019_reference](drugs/drug_cefotiam/Cefotiam_Shah2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 (+1 cov.) | Shah NR et al., Novel Population Pharmacokinetic Approa…, Pharmaceutics (2019) | [10.3390/pharmaceutics11060286](https://doi.org/10.3390/pharmaceutics11060286) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Konishi_1984_reference](drugs/drug_cefotiam/Cefotiam_Konishi1984_reference.md) | — | 1-compartment (no model) | 3 | Konishi K et al., Pharmacokinetics of cefotiam in patient…, Antimicrobial agents and ch… (1984) | [10.1128/AAC.26.5.647](https://doi.org/10.1128/AAC.26.5.647) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Momose_1982_reference](drugs/drug_cefotiam/Cefotiam_Momose1982_reference.md) | — | 1-compartment (no model) | 4 | Momose A et al., [The studies on distributions of cefsul…, The Japanese journal of ant… (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fujimoto_1995_GABA_current](drugs/drug_cefotiam/pd_Fujimoto_1995_GABA_current.md) | GABA-induced Cl- current ← cefotiam · direct sigmoid Emax (Hill) effect | — | Fujimoto M et al., Dual mechanisms of GABAA response inhib…, British journal of pharmaco… (1995) | [10.1111/j.1476-5381.1995.tb15957.x](https://doi.org/10.1111/j.1476-5381.1995.tb15957.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Maruyama_1989_CFU_GM](drugs/drug_cefotiam/pd_Maruyama_1989_CFU_GM.md) | colony formation from mouse granulocyte-macrophage progenitors ← cefotiam · direct sigmoid Emax (Hill) effect | — | Maruyama T et al., Effect of antibiotics on colony formati…, Pharmacology & toxicology (1989) | [10.1111/j.1600-0773.1989.tb00674.x](https://doi.org/10.1111/j.1600-0773.1989.tb00674.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Maruyama_1989_CFU_M](drugs/drug_cefotiam/pd_Maruyama_1989_CFU_M.md) | colony formation from megakaryocyte progenitors ← cefotiam · direct sigmoid Emax (Hill) effect | — | Maruyama T et al., Effect of antibiotics on colony formati…, Pharmacology & toxicology (1989) | [10.1111/j.1600-0773.1989.tb00674.x](https://doi.org/10.1111/j.1600-0773.1989.tb00674.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nishimura_1986_Dose_response_relationship](drugs/drug_cefotiam/pd_Nishimura_1986_Dose_response_relationship.md) | Dose-response relationship ← cefotiam · stimulation effect | — | Nishimura T et al., [Pharmacokinetic and clinical studies o…, The Japanese journal of ant… (1986) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefotiam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 70 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alonso_1984.pdf` | Alonso IG et al., Influence of experimentally induced cho…, Arzneimittel-Forschung (1984) | popPK | 10 | not captured | [6093824](https://pubmed.ncbi.nlm.nih.gov/6093824) | The study reports quantitative two-compartment pharmacokinetic parameters (alpha, beta, K12, K21, K13, half-lives) for cefotiam in rabbits. |
| `Konishi_1984.pdf` | Konishi K et al., Pharmacokinetics of cefotiam in patient…, Antimicrobial agents and ch… (1984) | popPK | 10 | [10.1128/AAC.26.5.647](https://doi.org/10.1128/AAC.26.5.647) | [6097172](https://pubmed.ncbi.nlm.nih.gov/6097172) | The abstract reports quantitative PK parameters (Varea, t1/2 beta) for cefotiam in humans with renal impairment. |
| `Ikawa_2008.pdf` | Ikawa K et al., Development of breakpoints of cephems f…, Journal of infection and ch… (2008) | popPK | 8 | [10.1007/s10156-008-0598-z](https://doi.org/10.1007/s10156-008-0598-z) | [18622678](https://pubmed.ncbi.nlm.nih.gov/18622678) | The study reports population pharmacokinetic parameters for cefotiam in human peritoneal fluid, but the specific numeric values are not present in the provided abstract/text. |
| `Momose_1982.pdf` | Momose A et al., [The studies on distributions of cefsul…, The Japanese journal of ant… (1982) | popPK | 8 | not captured | [6304364](https://pubmed.ncbi.nlm.nih.gov/6304364) | Reports specific pharmacokinetic parameters including AUC ratios, gamma-phase half-life, and tissue concentrations for cefotiam in humans. |
| `Yamamoto_1986.pdf` | Yamamoto T et al., [Pharmacokinetic and clinical studies o…, The Japanese journal of ant… (1986) | popPK | 8 | not captured | [3467093](https://pubmed.ncbi.nlm.nih.gov/3467093) | The study reports pharmacokinetic data for cefotiam including half-life and peak concentrations in a two/three-compartment model analysis, but specific values for clearance, volume, or rate constants are not explicitly listed. |
| `Matsuura_1983.pdf` | Matsuura Y et al., [Experimental and clinical studies of c…, The Japanese journal of ant… (1983) | popPK | 5 | not captured | [6308294](https://pubmed.ncbi.nlm.nih.gov/6308294) | The study investigates cefotiam PK in humans using compartmental models but only reports concentration-time data (peak levels) without explicit CL, V, or Ka values. |

<sub>queue written 2026-10-07T10:36:00.339396+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arthurs_2021 | irrelevant | 0 | 0 | The paper is a study on ultrasound landmarking of the cricothyroid membrane and contains no data regarding cefotiam or pharmacokinetics. |
| PGx | Bratosiewicz-Wasik_2004 | not_relevant | 0 | 0 | The paper discusses molecular mechanisms of prion diseases and the PRNP gene, but does not mention cefotiam or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Briki_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of 5-fluorouracil, not cefotiam. |
| popPK | Bulkeley_2023 | irrelevant | 0 | 0 | The paper is a study on stallion sperm morphology and reactive oxygen species, completely unrelated to cefotiam pharmacokinetics. |
| popPK | Burlot_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the Bcl2 inhibitor S65487, not for cefotiam. |
| popPK | Canini_2018 | irrelevant | 0 | 0 | The paper analyzes the pharmacokinetics of setrobuvir, an HCV inhibitor, and does not involve cefotiam. |
| popPK | De_2022 | irrelevant | 0 | 0 | This is a meta-analysis of drug disposition in cystic fibrosis patients and does not report specific pharmacokinetic parameters for cefotiam. |
| popPK | Edwards_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of actinomycin-D, not cefotiam. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper reports on antimicrobial resistance surveillance in bacteria and contains no pharmacokinetic data for cefotiam. |
| popPK | Fujimoto_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of GABA receptor inhibition, not a pharmacokinetic study of cefotiam disposition. |
| PGx | Gamperl_2009 | not_relevant | 0 | 0 | The paper studies physiological responses in Atlantic cod, not pharmacokinetics or pharmacodynamics of cefotiam in humans. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper is about atmospheric inorganic nitrogen deposition fluxes in China and has no relation to cefotiam pharmacokinetics. |
| popPK | Ikawa_2008 | relevant | 8 | 0 | The study reports population pharmacokinetic parameters for cefotiam in human peritoneal fluid, but the specific numeric values are not present in the provided abstract/text. |
| popPK | Irby_2021 | irrelevant | 0 | 0 | The paper is a tutorial on handling missing PK data using simulations and does not report specific PK parameters for cefotiam. |
| popPK | Kumar_2008 | irrelevant | 0 | 0 | This is a methodological simulation study using a generic model to assess dose history inaccuracies; it does not report specific PK parameters for cefotiam. |
| PGx | Laftavi_2013 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of tacrolimus in relation to race and clotrimazole, not cefotiam. |
| popPK | Lorenzo_2024 | irrelevant | 0 | 0 | The paper is a computational oncology study regarding breast cancer chemotherapy (doxorubicin, paclitaxel, etc.) and does not contain any data for the drug cefotiam. |
| PGx | Maasoumy_2016 | not_relevant | 0 | 0 | The paper focuses on HCV RNA levels as predictors of relapse in hepatitis C patients, which is unrelated to cefotiam pharmacokinetics or pharmacogenomics. |
| popPK | Matsuura_1983 | relevant | 5 | 3 | The study investigates cefotiam PK in humans using compartmental models but only reports concentration-time data (peak levels) without explicit CL, V, or Ka values. |
| popPK | McKay_2023 | irrelevant | 0 | 0 | The paper describes a health-promoting intervention for physical activity in older adults and contains no data regarding cefotiam or pharmacokinetics. |
| popPK | Murakawa_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftizoxime, with cefotiam listed only as a reference drug. |
| popPK | OBrien_2018 | irrelevant | 0 | 0 | The paper describes a thermal-physiological model for heat recovery in dogs and does not involve the pharmacokinetics of cefotiam. |
| PGx | Ogawa_2017 | not_relevant | 0 | 0 | The paper compares HCV viral load assays during sofosbuvir therapy and does not involve cefotiam or pharmacogenomics. |
| popPK | Ohno_2007 | irrelevant | 0 | 0 | The study evaluates ceftriaxone as the subject drug, with cefotiam serving only as a comparator for %T&gt;MIC calculations without reporting its own disposition parameters. |
| popPK | Potter_2020 | irrelevant | 0 | 0 | The paper describes a thermophysiological heat model for dogs, not a pharmacokinetic study of cefotiam. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The paper is a preclinical imaging study on trastuzumab and cetuximab in mice, not a pharmacokinetic study of cefotiam. |
| popPK | Sorokina_2020 | irrelevant | 0 | 0 | The paper is a review of natural products databases and does not contain pharmacokinetic data for cefotiam. |
| PGx | Vermehren_2017 | not_relevant | 0 | 0 | The paper compares diagnostic assays for HCV RNA monitoring and does not mention cefotiam, gene variants, or PK/PD parameters. |
| popPK | Yamamoto_1986 | relevant | 8 | 4 | The study reports pharmacokinetic data for cefotiam including half-life and peak concentrations in a two/three-compartment model analysis, but specific values for clearance, volume, or rate constants are not explicitly listed. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study investigates the toxicity of four different antibiotics (including no cefotiam) to green algae and does not contain pharmacokinetic data for cefotiam. |
| popPK | Zhao_2020_2 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of cefepime, not cefotiam (which is only mentioned as an internal standard). |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The study investigates cefotiam's ability to bind the SARS-CoV-2 Spike protein and inhibit viral entry, not its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:36 UTC</sub>
