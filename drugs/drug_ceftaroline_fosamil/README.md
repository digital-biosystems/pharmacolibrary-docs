<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftaroline fosamil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CeftarolineFosamil_Adamiszak2025_reference&quot;,&quot;label&quot;:&quot;Adamiszak_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftaroline_fosamil/CeftarolineFosamil_Adamiszak2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CeftarolineFosamil_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftaroline_fosamil/CeftarolineFosamil_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ceftaroline fosamil

- **generic name:** ceftaroline fosamil
- **ATC codes:** `J01DI02`
- **DrugBank:** [DB06590](https://go.drugbank.com/drugs/DB06590) · **PubChem:** [CID 9852981](https://pubchem.ncbi.nlm.nih.gov/compound/9852981)
- **molar mass:** 684.67 g/mol (C22H21N8O8PS4) — DrugBank
- **groups:** approved, investigational

## About

Ceftaroline fosamil is a cephalosporin antibiotic used to treat bacterial infections such as community-acquired pneumonia, skin infections, and staphylococcal infections. It is approved and authorised in the European Union, where it is used for these infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409712](https://www.wikidata.org/wiki/Q409712) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ceftaroline (ceftaroline_fosamil) | parent | 684.67 | C22H21N8O8PS4 | DrugBank | [9852981](https://pubchem.ncbi.nlm.nih.gov/compound/9852981) | Adamiszak_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:35 | 6:24 | 2/2/0 | 1/0/1 | 0/0/0 | 284,631/14,454 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Adamiszak_2025_reference](drugs/drug_ceftaroline_fosamil/CeftarolineFosamil_Adamiszak2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 6 | Adamiszak A et al., Do Critically Ill Patients Undergoing C…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14040347](https://doi.org/10.3390/antibiotics14040347) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Principe_2022_reference](drugs/drug_ceftaroline_fosamil/CeftarolineFosamil_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Le_2017_reference](drugs/drug_ceftaroline_fosamil/CeftarolineFosamil_Le2017_reference.md) | — | 1-compartment (no model) | 0 | Le J et al., Pharmacokinetics of single-dose ceftaro…, Pediatric pulmonology (2017) | [10.1002/ppul.23827](https://doi.org/10.1002/ppul.23827) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Minichmayr_2024_reference](drugs/drug_ceftaroline_fosamil/CeftarolineFosamil_Minichmayr2024_reference.md) | — | 1-compartment (no model) | 0 | Minichmayr IK et al., Impact of Key Components of Intensified…, Clinical pharmacokinetics (2024) | [10.1007/s40262-023-01325-4](https://doi.org/10.1007/s40262-023-01325-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Deshpande_2017_Emax](drugs/drug_ceftaroline_fosamil/pd_Deshpande_2017_Emax.md) | maximal microbial kill ← ceftaroline · direct Emax (saturable) effect | — | Deshpande D et al., The discovery of ceftazidime/avibactam…, The Journal of antimicrobia… (2017) | [10.1093/jac/dkx306](https://doi.org/10.1093/jac/dkx306) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bhavnani_2015_clinical_and_microbiological_responses](drugs/drug_ceftaroline_fosamil/pd_Bhavnani_2015_clinical_and_microbiological_responses.md) | clinical and microbiological responses ← ceftaroline · categorical (graded) response model | — | Bhavnani SM et al., Pharmacokinetic-pharmacodynamic analysi…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.02531-14](https://doi.org/10.1128/AAC.02531-14) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ceftaroline_fosamil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Helfer_2022.pdf` | Helfer VE et al., Population Pharmacokinetic Modeling and…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.00741-22](https://doi.org/10.1128/aac.00741-22) | [36005769](https://pubmed.ncbi.nlm.nih.gov/36005769) | The paper describes a population PK model for ceftaroline with specific covariates and compartment structures, but the actual numeric parameter estimates (CL, V, etc.) are not present in the provided text. |
| `Helfer_2023.pdf` | Helfer VE et al., Population Pharmacokinetic Modeling of…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00382-23](https://doi.org/10.1128/aac.00382-23) | [37367389](https://pubmed.ncbi.nlm.nih.gov/37367389) | The paper is a population PK study of ceftaroline in rats, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only derived ratios (Qin/Qout) and simulation results. |
| `Le_2017.pdf` | Le J et al., Pharmacokinetics of single-dose ceftaro…, Pediatric pulmonology (2017) | popPK | 10 | [10.1002/ppul.23827](https://doi.org/10.1002/ppul.23827) | [28910514](https://pubmed.ncbi.nlm.nih.gov/28910514) | The paper reports quantitative population PK parameters (CL, V) for ceftaroline fosamil in children with cystic fibrosis, with specific numeric values provided in the text. |
| `Wölfl-Duchek_2025.pdf` | Wölfl-Duchek M et al., Cerebrospinal fluid concentrations of c…, International journal of an… (2025) | popPK | 9 | [10.1016/j.ijantimicag.2025.107512](https://doi.org/10.1016/j.ijantimicag.2025.107512) | [40239748](https://pubmed.ncbi.nlm.nih.gov/40239748) | This is a population PK study for ceftaroline fosamil in humans that reports specific distribution clearance ratios (0.021 L/h) but relies on two-compartment models where standard CL and V values are likely in tables or figures not fully detailed in the provided text. |

<sub>queue written 2026-10-07T10:30:21.930633+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhavnani_2013 | irrelevant | 1 | 0 | The paper focuses on clinical efficacy outcomes (success rates) and PK-PD metrics (%T&gt;MIC) rather than reporting quantitative population pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Bhavnani_2015 | relevant | 4 | 0 | The paper describes a PK-PD analysis for ceftaroline fosamil in humans, but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.), only clinical outcomes and qualitative dose recommendations. |
| popPK | Chauzy_2022 | relevant | 9 | 4 | The paper reports a population PK model for ceftaroline (the active moiety of ceftaroline fosamil) with specific clearance values (e.g., 10.6 L/h) in the text, although the full model parameter table (V, Q, etc.) is in Supplementary Material. |
| popPK | Cheng_2021 | irrelevant | 1 | 0 | This is a review article summarizing external evaluation studies of population pharmacokinetics; while ceftaroline is listed as one of the drugs studied, no specific quantitative PK parameter values (CL, V, etc.) for ceftaroline_fosamil are reported in the text. |
| popPK | Cusumano_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic (kill curve) simulation and does not report pharmacokinetic parameters for ceftaroline. |
| popPK | Das_2019 | relevant | 8 | 1 | The paper describes a population PK model for ceftaroline_fosamil, but the specific quantitative parameter estimates (CL, V, etc.) are located in Supplementary Table S3, which is not included in the provided evidence. |
| popPK | Deshpande_2017 | irrelevant | 0 | 0 | The study focuses on the efficacy of ceftazidime/avibactam against Mycobacterium avium complex in an in-vitro/in-vitro model (HFS-MAC), not the pharmacokinetics of ceftaroline fosamil; ceftaroline is only a secondary comparator in the initial screening. |
| popPK | Helfer_2022 | relevant | 10 | 0 | The paper describes a population PK model for ceftaroline with specific covariates and compartment structures, but the actual numeric parameter estimates (CL, V, etc.) are not present in the provided text. |
| popPK | Helfer_2023 | relevant | 10 | 2 | The paper is a population PK study of ceftaroline in rats, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only derived ratios (Qin/Qout) and simulation results. |
| popPK | Kunz_2024 | irrelevant | 0 | 0 | The study is an in vitro and ex vivo microbiology experiment evaluating antimicrobial synergy, not a pharmacokinetic study reporting disposition parameters for ceftaroline_fosamil. |
| popPK | Morales_2022 | irrelevant | 2 | 0 | This is a scoping review that discusses ceftaroline only in the context of therapeutic drug monitoring targets (e.g., 40% fT&gt;MIC) without reporting specific quantitative population pharmacokinetic parameters (CL, V, Q) or extractable numeric values for the drug. |
| popPK | Nichols_2018 | irrelevant | 0 | 0 | The paper is a review of PK/PD targets for avibactam (a beta-lactamase inhibitor) and does not report quantitative pharmacokinetic parameters for the subject drug ceftaroline fosamil. |
| popPK | Principe_2022 | irrelevant | 2 | 2 | The paper is a review of new beta-lactam/beta-lactamase inhibitor combinations (specifically ceftaroline/avibactam) and does not provide population PK parameters for ceftaroline fosamil itself. |
| popPK | Stein_2015 | irrelevant | 1 | 0 | The study reports PK/PD ratios (CSF:serum penetration) and exposure ratios rather than standard population pharmacokinetic parameters (CL, V, Q, ka), and no numeric values for these parameters are provided in the text. |
| popPK | Wölfl-Duchek_2025 | relevant | 9 | 4 | This is a population PK study for ceftaroline fosamil in humans that reports specific distribution clearance ratios (0.021 L/h) but relies on two-compartment models where standard CL and V values are likely in tables or figures not fully detailed in the provided text. |
| popPK | van_2024 | irrelevant | 3 | 0 | The study uses a previously published population PK model for ceftaroline (Helfer et al.) rather than estimating new parameters, and the numeric values in the table correspond to the new lefamulin model, not ceftaroline. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:30 UTC</sub>
