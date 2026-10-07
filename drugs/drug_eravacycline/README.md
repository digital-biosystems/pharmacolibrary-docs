<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;eravacycline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eravacycline_Ji2025_reference&quot;,&quot;label&quot;:&quot;Ji_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Ji2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eravacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eravacycline_Zhanel2016_reference&quot;,&quot;label&quot;:&quot;Zhanel_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Zhanel2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# eravacycline

- **generic name:** eravacycline
- **ATC codes:** `J01AA13`
- **DrugBank:** [DB12329](https://go.drugbank.com/drugs/DB12329) · **PubChem:** [CID 54726192](https://pubchem.ncbi.nlm.nih.gov/compound/54726192)
- **molar mass:** 558.563 g/mol (C27H31FN4O8) — DrugBank
- **groups:** approved, investigational

## About

Eravacycline is a tetracycline antibacterial used to treat bacterial infections. It is an approved medicine, with one product authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15410941](https://www.wikidata.org/wiki/Q15410941) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eravacycline | parent | 558.563 | C27H31FN4O8 | DrugBank | [54726192](https://pubchem.ncbi.nlm.nih.gov/compound/54726192) | Ji_2025, Singh_2026, Zhanel_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:59 | 4:34 | 3/1/0 | 2/0/0 | 0/0/0 | 204,008/17,738 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2025_reference](drugs/drug_eravacycline/Eravacycline_Ji2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Ji X-w et al., Population pharmacokinetics and pulmona…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01065-24](https://doi.org/10.1128/aac.01065-24) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_reference](drugs/drug_eravacycline/Eravacycline_Singh2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhanel_2016_reference](drugs/drug_eravacycline/Eravacycline_Zhanel2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 6 | Zhanel GG et al., Review of Eravacycline, a Novel Fluoroc…, Drugs (2016) | [10.1007/s40265-016-0545-8](https://doi.org/10.1007/s40265-016-0545-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lou_2026_reference](drugs/drug_eravacycline/Eravacycline_Lou2026_reference.md) | — | 1-compartment (no model) | 0 | Lou L et al., Population pharmacokinetic analysis and…, The Journal of antimicrobia… (2026) | [10.1093/jac/dkag178](https://doi.org/10.1093/jac/dkag178) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_2](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_2.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_3](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_3.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_4](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_4.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_5](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_5.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_6](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_6.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_7](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_7.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Singh_2026_MAB_burden_8](drugs/drug_eravacycline/pd_Singh_2026_MAB_burden_8.md) | MAB burden ← eravacycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026) | [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Thabit_2018_change_in_log10CFU_at_24_h_compared_with_0_h_controls](drugs/drug_eravacycline/pd_Thabit_2018_change_in_log10CFU_at_24_h_compared_with_0_h_con.md) | change in log10CFU at 24 h compared with 0 h controls ← eravacycline · direct sigmoid Emax (Hill) effect | — | Thabit AK et al., Assessment of in vivo efficacy of erava…, International journal of an… (2018) | [10.1016/j.ijantimicag.2018.01.001](https://doi.org/10.1016/j.ijantimicag.2018.01.001) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eravacycline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2025.pdf` | Chen Y et al., Population pharmacokinetics/pharmacodyn…, International journal of an… (2025) | popPK | 10 | [10.1016/j.ijantimicag.2025.107603](https://doi.org/10.1016/j.ijantimicag.2025.107603) | [40902913](https://pubmed.ncbi.nlm.nih.gov/40902913) | The paper describes a population PK study for eravacycline in humans, but the abstract and evidence provided do not contain specific numeric parameter values (CL, V, Q, etc.). |
| `Lou_2026.pdf` | Lou L et al., Population pharmacokinetic analysis and…, The Journal of antimicrobia… (2026) | popPK | 10 | [10.1093/jac/dkag178](https://doi.org/10.1093/jac/dkag178) | [42163540](https://pubmed.ncbi.nlm.nih.gov/42163540) | The paper is a population pharmacokinetic study for eravacycline that explicitly reports quantitative values for CL (14.4 L/h), V1 (177.6 L), and V2 (383.2 L). |
| `Hou_2026.pdf` | Hou Y et al., Efficacy, safety, and population pharma…, International journal of an… (2026) | popPK | 9 | [10.1016/j.ijantimicag.2026.107795](https://doi.org/10.1016/j.ijantimicag.2026.107795) | [41921670](https://pubmed.ncbi.nlm.nih.gov/41921670) | The study reports a population PK model for eravacycline with covariate effects (e.g., % changes in clearance/volume), but specific base parameter estimates (CL, V values) are not explicitly listed in the provided abstract text. |
| `Thabit_2018.pdf` | Thabit AK et al., Assessment of in vivo efficacy of erava…, International journal of an… (2018) | popPK | 5 | [10.1016/j.ijantimicag.2018.01.001](https://doi.org/10.1016/j.ijantimicag.2018.01.001) | [29325762](https://pubmed.ncbi.nlm.nih.gov/29325762) | The study describes eravacycline PK in a murine model but the extracted evidence only contains PD indices (fAUC/MIC) and doses, with no explicit PK parameter values (CL, V, t1/2) present in the text. |
| `Yang_2026.pdf` | Yang XJ et al., Evaluating eravacycline dosing regimens…, Journal of chemotherapy (Fl… (2026) | popPK | 5 | [10.1080/1120009X.2026.2675083](https://doi.org/10.1080/1120009X.2026.2675083) | [42157598](https://pubmed.ncbi.nlm.nih.gov/42157598) | The paper describes a Monte Carlo simulation using PK data for eravacycline, but no specific quantitative PK parameter values (CL, V, etc.) are present in the provided text. |
| `Zhanel_2016.pdf` | Zhanel GG et al., Review of Eravacycline, a Novel Fluoroc…, Drugs (2016) | popPK | 5 | [10.1007/s40265-016-0545-8](https://doi.org/10.1007/s40265-016-0545-8) | [26863149](https://pubmed.ncbi.nlm.nih.gov/26863149) | The paper is a review that reports specific population PK parameter values (Vss, t1/2, CL, bioavailability) for eravacycline in humans, but it lacks other key parameters like ka or Q. |

<sub>queue written 2026-10-07T09:55:30.499818+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 10 | 0 | The paper describes a population PK study for eravacycline in humans, but the abstract and evidence provided do not contain specific numeric parameter values (CL, V, Q, etc.). |
| popPK | Chen_2026 | relevant | 4 | 8 | Reports quantitative exposure metrics (AUC, Cmax, Cmin) for a single human case, lacking full compartmental disposition parameters (CL, V) required for population PK. |
| popPK | Hou_2026 | relevant | 9 | 3 | The study reports a population PK model for eravacycline with covariate effects (e.g., % changes in clearance/volume), but specific base parameter estimates (CL, V values) are not explicitly listed in the provided abstract text. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical perspectives and PK/PD properties of multiple antibiotics in liver transplantation, but it does not report original quantitative population pharmacokinetic parameter values (such as CL or Vd estimates) for eravacycline. |
| popPK | Meng_2026 | irrelevant | 2 | 0 | This is a review article providing an overview of evidence without presenting original quantitative pharmacokinetic parameter values or specific numerical data for extraction. |
| popPK | Thabit_2018 | relevant | 5 | 0 | The study describes eravacycline PK in a murine model but the extracted evidence only contains PD indices (fAUC/MIC) and doses, with no explicit PK parameter values (CL, V, t1/2) present in the text. |
| popPK | Wu_2023 | irrelevant | 1 | 0 | The study is an in-vitro antimicrobial activity and Monte Carlo simulation paper that references eravacycline's PK parameters from other studies rather than reporting original quantitative disposition parameters for the drug. |
| popPK | Yang_2026 | irrelevant | 5 | 0 | The paper describes a Monte Carlo simulation using PK data for eravacycline, but no specific quantitative PK parameter values (CL, V, etc.) are present in the provided text. |
| popPK | Zhanel_2020 | irrelevant | 0 | 0 | The paper is a review of omadacycline, not eravacycline, and only mentions eravacycline as a comparator. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:55 UTC</sub>
