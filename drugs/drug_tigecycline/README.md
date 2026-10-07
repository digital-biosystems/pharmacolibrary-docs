<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;tigecycline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tigecycline_Bastida2022_reference&quot;,&quot;label&quot;:&quot;Bastida_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tigecycline/Tigecycline_Bastida2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tigecycline_Song2024_crrt&quot;,&quot;label&quot;:&quot;Song_2024_crrt&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tigecycline/Tigecycline_Song2024_crrt.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tigecycline_Song2024_non_crrt&quot;,&quot;label&quot;:&quot;Song_2024_non_crrt&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tigecycline/Tigecycline_Song2024_non_crrt.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tigecycline

- **generic name:** tigecycline
- **ATC codes:** `J01AA12`
- **DrugBank:** [DB00560](https://go.drugbank.com/drugs/DB00560) · **PubChem:** [CID 54686904](https://pubchem.ncbi.nlm.nih.gov/compound/54686904)
- **molar mass:** 585.6487 g/mol (C29H39N5O8) — DrugBank
- **groups:** approved, investigational

## About

Tigecycline is a tetracycline antibiotic used to treat bacterial infections, including pneumonia and complicated skin, soft tissue, and intra-abdominal infections. It is authorised in the European Union and used mainly in hospital settings for serious bacterial infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420595](https://www.wikidata.org/wiki/Q420595) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tigecycline | parent | 585.649 | C29H39N5O8 | DrugBank | [54686904](https://pubchem.ncbi.nlm.nih.gov/compound/54686904) | Bastida_2022, Luo_2023, Song_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:11 | 4:00 | 3/1/0 | 2/0/1 | 0/0/0 | 229,002/14,402 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bastida_2022_reference](drugs/drug_tigecycline/Tigecycline_Bastida2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Bastida C et al., Tigecycline population pharmacokinetics…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac036](https://doi.org/10.1093/jac/dkac036) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_crrt](drugs/drug_tigecycline/Tigecycline_Song2024_crrt.md) | ▶ model + simulator | 2-compartment, IV | 4 | Song S et al., Population Pharmacokinetics of Tigecycl…, Drug design, development an… (2024) | [10.2147/DDDT.S473080](https://doi.org/10.2147/DDDT.S473080) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_non_crrt](drugs/drug_tigecycline/Tigecycline_Song2024_non_crrt.md) | ▶ model + simulator | 2-compartment, IV | 4 | Song S et al., Population Pharmacokinetics of Tigecycl…, Drug design, development an… (2024) | [10.2147/DDDT.S473080](https://doi.org/10.2147/DDDT.S473080) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Luo_2023_reference](drugs/drug_tigecycline/Tigecycline_Luo2023_reference.md) | — | 1-compartment (no model) | 3 | Luo X et al., Population pharmacokinetics of tigecycl…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1083464](https://doi.org/10.3389/fphar.2023.1083464) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Deshpande_2025_bacterial_burden](drugs/drug_tigecycline/pd_Deshpande_2025_bacterial_burden.md) | bacterial burden ← tigecycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Deshpande D et al., Tigecycline pharmacodynamics in the hol…, bioRxiv : the preprint serv… (2025) | [10.1101/2025.07.29.667481](https://doi.org/10.1101/2025.07.29.667481) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Deshpande_2025_bacterial_burden_2](drugs/drug_tigecycline/pd_Deshpande_2025_bacterial_burden_2.md) | bacterial burden ← tigecycline · direct sigmoid Emax (Hill) effect | model (no simulator) | Deshpande D et al., Tigecycline pharmacodynamics in the hol…, bioRxiv : the preprint serv… (2025) | [10.1101/2025.07.29.667481](https://doi.org/10.1101/2025.07.29.667481) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leng_2021_PK_PD_target](drugs/drug_tigecycline/pd_Leng_2021_PK_PD_target.md) | pharmacokinetic/pharmacodynamic target ← tigecycline · model not identified | — | Leng B et al., Dose optimisation based on pharmacokine…, Journal of global antimicro… (2021) | [10.1016/j.jgar.2021.04.006](https://doi.org/10.1016/j.jgar.2021.04.006) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leng_2021_antibiotic_effect](drugs/drug_tigecycline/pd_Leng_2021_antibiotic_effect.md) | antibiotic effect ← tigecycline · model not identified | — | Leng B et al., Dose optimisation based on pharmacokine…, Journal of global antimicro… (2021) | [10.1016/j.jgar.2021.04.006](https://doi.org/10.1016/j.jgar.2021.04.006) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Passarell_2009_nausea](drugs/drug_tigecycline/pd_Passarell_2009_nausea.md) | nausea ← tigecycline · categorical (graded) response model | — | Passarell J et al., Exposure-response analyses of tigecycli…, Diagnostic microbiology and… (2009) | [10.1016/j.diagmicrobio.2009.06.019](https://doi.org/10.1016/j.diagmicrobio.2009.06.019) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Passarell_2009_vomiting](drugs/drug_tigecycline/pd_Passarell_2009_vomiting.md) | vomiting ← tigecycline · categorical (graded) response model | — | Passarell J et al., Exposure-response analyses of tigecycli…, Diagnostic microbiology and… (2009) | [10.1016/j.diagmicrobio.2009.06.019](https://doi.org/10.1016/j.diagmicrobio.2009.06.019) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tigecycline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bastida_2022.pdf` | Bastida C et al., Tigecycline population pharmacokinetics…, The Journal of antimicrobia… (2022) | popPK | 10 | [10.1093/jac/dkac036](https://doi.org/10.1093/jac/dkac036) | [35178567](https://pubmed.ncbi.nlm.nih.gov/35178567) | The abstract explicitly reports quantitative population PK parameter estimates (CL, Q, V1, V2) for tigecycline in a human study. |
| `Hu_2026.pdf` | Hu W et al., Population pharmacokinetics and probabi…, The Journal of antimicrobia… (2026) | popPK | 10 | [10.1093/jac/dkag156](https://doi.org/10.1093/jac/dkag156) | [42085673](https://pubmed.ncbi.nlm.nih.gov/42085673) | The paper describes a population pharmacokinetic model of tigecycline, but specific numeric parameter values (e.g., CL, V) are not present in the provided abstract/text, only qualitative model descriptions and PTA outcomes. |
| `Van_2007.pdf` | Van Wart SA et al., Population pharmacokinetics of tigecycl…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007300263](https://doi.org/10.1177/0091270007300263) | [17519399](https://pubmed.ncbi.nlm.nih.gov/17519399) | The paper describes a population PK model for tigecycline, but no numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |
| `Zhou_2021.pdf` | Zhou Y et al., Population pharmacokinetics and exposur…, British journal of clinical… (2021) | popPK | 9 | [10.1111/bcp.14692](https://doi.org/10.1111/bcp.14692) | [33283892](https://pubmed.ncbi.nlm.nih.gov/33283892) | The study is a population pharmacokinetic analysis of tigecycline in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract/evidence text. |
| `Zhao_2020.pdf` | Zhao HH et al., PK/PD study of tigecycline in severely…, International journal of cl… (2020) | popPK | 7 | [10.5414/CP203669](https://doi.org/10.5414/CP203669) | [32716292](https://pubmed.ncbi.nlm.nih.gov/32716292) | The study reports PK descriptors like Cmax, Cmin, and AUC for tigecycline in humans, but lacks explicit compartmental parameters (CL, V, ka) or population model values in the text. |

<sub>queue written 2026-10-07T10:08:13.697877+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrasa_2024 | irrelevant | 0 | 0 | The study uses literature-derived PK parameters to perform Monte Carlo simulations for antibiotic dosing; it does not report original quantitative PK parameters (CL, V, Q, etc.) for tigecycline. |
| popPK | Cunha_2017 | irrelevant | 1 | 0 | This is a review article focusing on clinical dosing strategies and pharmacodynamic efficacy rather than an original study reporting quantitative population pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Dai_2025 | irrelevant | 3 | 8 | The paper is a systematic review of population PK studies, and although it summarizes typical parameter ranges and specific study values in the text, it is not an original study reporting primary data from tigecycline administration. |
| popPK | Hu_2026 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model of tigecycline, but specific numeric parameter values (e.g., CL, V) are not present in the provided abstract/text, only qualitative model descriptions and PTA outcomes. |
| popPK | Leng_2021 | irrelevant | 1 | 0 | The paper discusses PK/PD targets and dosage optimization conceptually but does not report original quantitative disposition parameters or numeric model values. |
| popPK | MacGowan_2008 | irrelevant | 2 | 0 | The paper is explicitly identified as a "brief review" summarizing previously published data, and no original quantitative pharmacokinetic parameter values (CL, V, etc.) are present in the provided text. |
| popPK | Meagher_2005 | irrelevant | 2 | 0 | The text describes a review or profile summarizing findings without providing specific numeric population PK parameter values (CL, V, Q) in the provided evidence. |
| popPK | Passarell_2009 | irrelevant | 1 | 0 | The study focuses on exposure-response (tolerability) analyses rather than reporting compartmental PK parameters (CL, V, Q) or population PK model estimates for tigecycline. |
| popPK | Van_2007 | relevant | 10 | 0 | The paper describes a population PK model for tigecycline, but no numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |
| popPK | Yang_2023 | relevant | 6 | 4 | The study reports quantitative exposure parameters (AUC, Cmin) for tigecycline in humans with hepatic impairment, but it is a PK/PD target attainment study rather than a compartmental model study reporting specific clearance (CL) or volume (V) values for tigecycline. |
| popPK | Zhanel_2016 | irrelevant | 0 | 0 | The paper is a review of eravacycline, a different drug, and only mentions tigecycline as a structural comparator without reporting its pharmacokinetic parameters. |
| popPK | Zhanel_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of omadacycline, not tigecycline, which is only mentioned as a structural and clinical comparator. |
| popPK | Zhou_2021 | relevant | 9 | 3 | The study is a population pharmacokinetic analysis of tigecycline in humans, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract/evidence text. |
| popPK | Zhou_2022 | relevant | 5 | 3 | The paper is a systematic review summarizing population PK parameters (CL, Vss) for tigecycline, providing only summary ranges and individual values from a specific sub-study rather than its own original model estimates. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:08 UTC</sub>
