<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03D&quot;,&quot;href&quot;:&quot;atc/G03D.md&quot;},{&quot;label&quot;:&quot;hydroxyprogesterone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxyprogesterone_AlKofahi2021_reference&quot;,&quot;label&quot;:&quot;Al-Kofahi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# hydroxyprogesterone

- **generic name:** hydroxyprogesterone
- **ATC codes:** `G03DA03`, `G03FA02`
- **DrugBank:** [DB14570](https://go.drugbank.com/drugs/DB14570) · **PubChem:** not captured
- **molar mass:** 330.4611 g/mol (C21H30O3) — DrugBank
- **groups:** investigational

## About

Hydroxyprogesterone (17α-hydroxyprogesterone) is a progestogen steroid that has been used or studied for conditions such as endometriosis, amenorrhea, and uterine cancer. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q175901](https://www.wikidata.org/wiki/Q175901) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:44 | 3:12 | 1/1/0 | 0/0/0 | 0/0/0 | 146,316/11,138 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Kofahi_2021_reference](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_AlKofahi2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Al-Kofahi M et al., An integrated PK-PD model for cortisol…, British journal of clinical… (2021) | [10.1111/bcp.14470](https://doi.org/10.1111/bcp.14470) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sharma_2016_reference](drugs/drug_hydroxyprogesterone/Hydroxyprogesterone_Sharma2016_reference.md) | — | 1-compartment (no model) | 0 | Sharma S et al., Population pharmacokinetics of 17α-hydr…, British journal of clinical… (2016) | [10.1111/bcp.12990](https://doi.org/10.1111/bcp.12990) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydroxyprogesterone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Della_2019.pdf` | Della Torre M et al., Pharmacokinetics of 17 alpha hydroxypro…, American journal of obstetr… (2019) | popPK | 10 | [10.1016/j.ajogmf.2019.100051](https://doi.org/10.1016/j.ajogmf.2019.100051) | [33345841](https://pubmed.ncbi.nlm.nih.gov/33345841) | This is a population pharmacokinetic study of 17-alpha hydroxyprogesterone caproate in humans, but the specific numeric parameter estimates (clearance, volume, ka) are not provided in the text evidence. |
| `Sharma_2016.pdf` | Sharma S et al., Population pharmacokinetics of 17α-hydr…, British journal of clinical… (2016) | popPK | 9 | [10.1111/bcp.12990](https://doi.org/10.1111/bcp.12990) | [27133963](https://pubmed.ncbi.nlm.nih.gov/27133963) | The paper reports a population pharmacokinetic study of 17α-hydroxyprogesterone caproate (17-OHPC), the primary prodrug/metabolite system for hydroxyprogesterone therapy, with specific numeric parameter values (CL/F, V/F) explicitly provided in the abstract. |
| `Shaik_2016.pdf` | Shaik IH et al., Route of administration and formulation…, Xenobiotica; the fate of fo… (2016) | popPK | 8 | [10.3109/00498254.2015.1057547](https://doi.org/10.3109/00498254.2015.1057547) | [26153441](https://pubmed.ncbi.nlm.nih.gov/26153441) | The study reports PK parameters for 17-hydroxyprogesterone caproate in rats, providing specific half-life and bioavailability values, but lacks other quantitative parameters like CL or V in the text. |
| `Melin_2020.pdf` | Melin J et al., Pharmacokinetic/Pharmacodynamic Evaluat…, The Journal of clinical end… (2020) | popPK | 5 | [10.1210/clinem/dgaa071](https://doi.org/10.1210/clinem/dgaa071) | [32052005](https://pubmed.ncbi.nlm.nih.gov/32052005) | The study models 17-hydroxyprogesterone (17-OHP) as a biomarker/metabolite response to hydrocortisone (the parent drug) in a PK/PD framework, but no numeric PK parameter values for 17-OHP itself (e.g., clearance, volume) are present in the evidence. |

<sub>queue written 2026-10-07T08:42:36.997593+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Kofahi_2021 | irrelevant | 2 | 2 | The study focuses on cortisol pharmacokinetics and 17-hydroxyprogesterone pharmacodynamics in CAH, not the pharmacokinetics of the drug hydroxyprogesterone (19-nor-17-alpha-hydroxyprogesterone caproate). |
| popPK | Della_2019 | relevant | 10 | 3 | This is a population pharmacokinetic study of 17-alpha hydroxyprogesterone caproate in humans, but the specific numeric parameter estimates (clearance, volume, ka) are not provided in the text evidence. |
| popPK | Evans_2021 | irrelevant | 0 | 0 | The study measures 17α-hydroxyprogesterone levels as a biomarker in an observational pain/immune study but does not report pharmacokinetic parameters (CL, V, etc.) for hydroxyprogesterone or any specific hydroxyprogesterone compound. |
| popPK | Lawrence_2026 | irrelevant | 0 | 0 | The study analyzes growth patterns (height, weight, BMI) in children with Congenital Adrenal Hyperplasia and treats 17-hydroxyprogesterone merely as a disease control biomarker, reporting no pharmacokinetic parameters for the drug itself. |
| popPK | Lenasi_2002 | irrelevant | 0 | 0 | The paper reports in vitro binding and G-protein activation data for progesterone (not hydroxyprogesterone) in a fungus, with no pharmacokinetic disposition parameters. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study is an in vitro receptor binding/activation assay and does not report pharmacokinetic parameters for hydroxyprogesterone. |
| popPK | Luconi_1998 | irrelevant | 0 | 0 | The study investigates receptor binding and intracellular signaling of progesterone and its analogs in sperm, reporting Kd and EC50 values, but does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2) for hydroxyprogesterone. |
| popPK | McMaster_2008 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study measuring gene transcription (IL-6 luciferase activity) in cell lines, not a pharmacokinetic study of hydroxyprogesterone disposition. |
| popPK | Melin_2020 | relevant | 5 | 0 | The study models 17-hydroxyprogesterone (17-OHP) as a biomarker/metabolite response to hydrocortisone (the parent drug) in a PK/PD framework, but no numeric PK parameter values for 17-OHP itself (e.g., clearance, volume) are present in the evidence. |
| popPK | Pannuti_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetics for medroxyprogesterone acetate (MAP), not hydroxyprogesterone; while MAP is a derivative, it is a distinct chemical entity with different absorption/metabolism kinetics, and no hydroxyprogesterone data are provided. |
| popPK | Pijnenburg-Kleizen_2015 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study assessing receptor binding and transactivation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Shaik_2016 | relevant | 8 | 3 | The study reports PK parameters for 17-hydroxyprogesterone caproate in rats, providing specific half-life and bioavailability values, but lacks other quantitative parameters like CL or V in the text. |
| popPK | Simons_2021 | irrelevant | 0 | 0 | The paper is a study protocol for a long-term neurodevelopmental follow-up of children exposed to 17α-hydroxyprogesterone in utero, and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | van_2012 | irrelevant | 0 | 0 | The study is an in vitro investigation of antifungal effects on steroidogenesis, not a pharmacokinetic study of hydroxyprogesterone disposition. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:42 UTC</sub>
