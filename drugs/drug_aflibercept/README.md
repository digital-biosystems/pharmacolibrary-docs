<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;aflibercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aflibercept_Thai2013_reference&quot;,&quot;label&quot;:&quot;Thai_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aflibercept/Aflibercept_Thai2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aflibercept

- **generic name:** aflibercept
- **ATC codes:** `L01XX44`, `S01LA05`
- **DrugBank:** [DB08885](https://go.drugbank.com/drugs/DB08885) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aflibercept is used to treat several eye conditions involving abnormal blood vessel growth or swelling in the retina, such as wet macular degeneration, diabetic retinopathy, macular edema and retinal vein occlusion, and is also used for colorectal cancer. It is an approved medicine, authorised in the European Union for multiple eye and cancer indications, and is widely used in ophthalmology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4689286](https://www.wikidata.org/wiki/Q4689286) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:59 | 10:14 | 1/9/0 | 0/0/0 | 0/0/0 | 178,796/21,443 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Thai_2013_reference](drugs/drug_aflibercept/Aflibercept_Thai2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Thai HT et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-013-2182-1](https://doi.org/10.1007/s00280-013-2182-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Luaces-Rodríguez_2020_89_zr_aflibercept](drugs/drug_aflibercept/Aflibercept_LuacesRodrguez2020_89_zr_aflibercept.md) | — | 1-compartment (no model) | 12 | Luaces-Rodríguez A et al., PET study of ocular and blood pharmacok…, European journal of pharmac… (2020) | [10.1016/j.ejpb.2020.06.024](https://doi.org/10.1016/j.ejpb.2020.06.024) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Luaces-Rodríguez_2020_89_zr_bevacizumab_89_zr_aflibercept](drugs/drug_aflibercept/Aflibercept_LuacesRodrguez2020_89_zr_bevacizumab_89_zr_aflib.md) | — | 1-compartment (no model) | 9 | Luaces-Rodríguez A et al., PET study of ocular and blood pharmacok…, European journal of pharmac… (2020) | [10.1016/j.ejpb.2020.06.024](https://doi.org/10.1016/j.ejpb.2020.06.024) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Luaces-Rodríguez_2020_89_zr_dfo](drugs/drug_aflibercept/Aflibercept_LuacesRodrguez2020_89_zr_dfo.md) | — | 1-compartment (no model) | 7 | Luaces-Rodríguez A et al., PET study of ocular and blood pharmacok…, European journal of pharmac… (2020) | [10.1016/j.ejpb.2020.06.024](https://doi.org/10.1016/j.ejpb.2020.06.024) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nagaoka_2025_reference](drugs/drug_aflibercept/Aflibercept_Nagaoka2025_reference.md) | — | 1-compartment (no model) | 0 | Nagaoka K et al., Comparative Pharmacokinetic Analysis of…, International journal of mo… (2025) | [10.3390/ijms26020556](https://doi.org/10.3390/ijms26020556) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Park_2016_reference](drugs/drug_aflibercept/Aflibercept_Park2016_reference.md) | — | 1-compartment (no model) | 1 | Park SJ et al., Intraocular Pharmacokinetics of Intravi…, Investigative ophthalmology… (2016) | [10.1167/iovs.16-19204](https://doi.org/10.1167/iovs.16-19204) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_mouse](drugs/drug_aflibercept/Aflibercept_Park2022_mouse.md) | — | 1-compartment (no model) | 4 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_rabbit](drugs/drug_aflibercept/Aflibercept_Park2022_rabbit.md) | — | 1-compartment (no model) | 4 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_rat](drugs/drug_aflibercept/Aflibercept_Park2022_rat.md) | — | 1-compartment (no model) | 4 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Thai_2011_reference](drugs/drug_aflibercept/Aflibercept_Thai2011_reference.md) | — | 1-compartment (no model) | 0 | Thai HT et al., A mechanism-based model for the populat…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.04015.x](https://doi.org/10.1111/j.1365-2125.2011.04015.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aflibercept) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PGF (binder), PGF (inhibitor), VEGFA (binder), VEGFA (inhibitor), VEGFB (binder), VEGFB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 11 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 10  ·  extracted 1  ·  needs_review 0  ·  rejected 9  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Park_2016.pdf` | Park SJ et al., Intraocular Pharmacokinetics of Intravi…, Investigative ophthalmology… (2016) | popPK | 10 | [10.1167/iovs.16-19204](https://doi.org/10.1167/iovs.16-19204) | [27258433](https://pubmed.ncbi.nlm.nih.gov/27258433) | The study reports quantitative intraocular pharmacokinetic parameters (half-life, MRT, AUC) for aflibercept in rabbits with all numeric values present in the text. |
| `Thai_2011.pdf` | Thai HT et al., A mechanism-based model for the populat…, British journal of clinical… (2011) | popPK | 10 | [10.1111/j.1365-2125.2011.04015.x](https://doi.org/10.1111/j.1365-2125.2011.04015.x) | [21575034](https://pubmed.ncbi.nlm.nih.gov/21575034) | The paper reports a population PK model for aflibercept in healthy subjects with specific numeric values for clearance, volume, and binding parameters provided in the abstract. |
| `Thai_2013.pdf` | Thai HT et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2013) | popPK | 10 | [10.1007/s00280-013-2182-1](https://doi.org/10.1007/s00280-013-2182-1) | [23673444](https://pubmed.ncbi.nlm.nih.gov/23673444) | The paper reports a population PK model for aflibercept in humans with specific numeric values for clearance (CL(f) 0.88 L/day, CL(b) 0.19 L/day) and volume of distribution (~4 L) provided in the abstract. |

<sub>queue written 2026-10-07T21:50:10.301640+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fetterly_2013 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of doxorubicin (DOX) in the presence of aflibercept, not the disposition parameters of aflibercept itself. |
| popPK | Finley_2015 | relevant | 8 | 4 | The paper presents a mechanistic PK model for aflibercept in humans and reports estimated rates for degradation and internalization, but standard compartmental parameters (CL, V) are not explicitly listed in the provided text, with detailed values likely in supplementary tables. |
| popPK | Sil_2024 | irrelevant | 0 | 0 | The study is a radiomics analysis of OCT images to predict treatment response in nAMD and does not report any pharmacokinetic parameters for aflibercept. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:51 UTC</sub>
