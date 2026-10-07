<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;basiliximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Basiliximab_Kovarik1999_reference&quot;,&quot;label&quot;:&quot;Kovarik_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_basiliximab/Basiliximab_Kovarik1999_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Basiliximab_Kovarik1999v2_reference&quot;,&quot;label&quot;:&quot;Kovarik_1999_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_basiliximab/Basiliximab_Kovarik1999v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Basiliximab_Kovarik2001_reference&quot;,&quot;label&quot;:&quot;Kovarik_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_basiliximab/Basiliximab_Kovarik2001_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# basiliximab

- **generic name:** basiliximab
- **ATC codes:** `L04AC02`
- **DrugBank:** [DB00074](https://go.drugbank.com/drugs/DB00074) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Basiliximab is an immunosuppressive monoclonal antibody used to prevent graft rejection in kidney transplantation. It is authorised in the European Union and used in transplant medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418702](https://www.wikidata.org/wiki/Q418702) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:50 | 0:36 | 3/0/0 | 0/0/0 | 0/0/0 | 57,203/3,475 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kovarik_1999_reference](drugs/drug_basiliximab/Basiliximab_Kovarik1999_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., Population pharmacokinetics and exposur…, Transplantation (1999) | [10.1097/00007890-199911150-00012](https://doi.org/10.1097/00007890-199911150-00012) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kovarik_1999_2_reference](drugs/drug_basiliximab/Basiliximab_Kovarik1999v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., Screening for basiliximab exposure-resp…, Clinical transplantation (1999) | [10.1034/j.1399-0012.1999.t01-2-130105.x](https://doi.org/10.1034/j.1399-0012.1999.t01-2-130105.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kovarik_2001_reference](drugs/drug_basiliximab/Basiliximab_Kovarik2001_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., A population pharmacokinetic screen to…, Clinical pharmacology and t… (2001) | [10.1067/mcp.2001.114887](https://doi.org/10.1067/mcp.2001.114887) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=basiliximab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL2RA (antibody), IL2RB (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kovarik_1999.pdf` | Kovarik JM et al., Population pharmacokinetics and exposur…, Transplantation (1999) | popPK | 10 | [10.1097/00007890-199911150-00012](https://doi.org/10.1097/00007890-199911150-00012) | [10573065](https://pubmed.ncbi.nlm.nih.gov/10573065) | The abstract explicitly reports quantitative population PK parameters including clearance (36.7 ml/hr), volume of distribution (8.0 L), and half-life (7.4 days) for basiliximab in humans. |
| `Kovarik_1999_2.pdf` | Kovarik JM et al., Screening for basiliximab exposure-resp…, Clinical transplantation (1999) | popPK | 10 | [10.1034/j.1399-0012.1999.t01-2-130105.x](https://doi.org/10.1034/j.1399-0012.1999.t01-2-130105.x) | [10081632](https://pubmed.ncbi.nlm.nih.gov/10081632) | The paper explicitly reports population pharmacokinetic parameters (Vd, half-life, clearance) for basiliximab in humans. |
| `Kovarik_2001.pdf` | Kovarik JM et al., A population pharmacokinetic screen to…, Clinical pharmacology and t… (2001) | popPK | 10 | [10.1067/mcp.2001.114887](https://doi.org/10.1067/mcp.2001.114887) | [11309548](https://pubmed.ncbi.nlm.nih.gov/11309548) | The paper is a population pharmacokinetic study of basiliximab in humans, and it explicitly reports quantitative values for clearance, volume of distribution, and half-life in the abstract. |
| `Podichetty_2020.pdf` | Podichetty JT et al., Pharmacokinetics of Basiliximab for the…, Pharmacotherapy (2020) | popPK | 10 | [10.1002/phar.2347](https://doi.org/10.1002/phar.2347) | [31742732](https://pubmed.ncbi.nlm.nih.gov/31742732) | The study describes a population pharmacokinetic model for basiliximab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Mentré_1999.pdf` | Mentré F et al., Constructing a prediction interval for…, Journal of pharmacokinetics… (1999) | popPK | 8 | [10.1023/a:1020658023774](https://doi.org/10.1023/a:1020658023774) | [10567956](https://pubmed.ncbi.nlm.nih.gov/10567956) | The paper describes a population pharmacokinetic analysis for basiliximab, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only reports derived prediction intervals for time to reach a threshold. |
| `Offner_2002.pdf` | Offner G et al., A multicenter, open-label, pharmacokine…, Transplantation (2002) | popPK | 5 | [10.1097/00007890-200210150-00010](https://doi.org/10.1097/00007890-200210150-00010) | [12394837](https://pubmed.ncbi.nlm.nih.gov/12394837) | The study is a pharmacokinetic and safety study in humans, but the provided text contains no quantitative PK parameter values (CL, V, t1/2). |

<sub>queue written 2026-10-06T23:49:42.783979+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hiramitsu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of everolimus, and basiliximab is only listed as a concomitant medication, with no PK parameters reported for it. |
| popPK | Lamba_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid, and basiliximab is only mentioned as a co-administered induction agent. |
| popPK | Leber_2023 | irrelevant | 2 | 0 | The study reports negligible clearance for basiliximab and provides no quantitative PK parameters (CL, V) for it, as the modeling focus was on other drugs with measurable adsorption. |
| popPK | Mentré_1999 | relevant | 8 | 0 | The paper describes a population pharmacokinetic analysis for basiliximab, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only reports derived prediction intervals for time to reach a threshold. |
| popPK | Offner_2002 | relevant | 5 | 0 | The study is a pharmacokinetic and safety study in humans, but the provided text contains no quantitative PK parameter values (CL, V, t1/2). |
| popPK | Podichetty_2020 | relevant | 10 | 1 | The study describes a population pharmacokinetic model for basiliximab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Pyatt_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of belatacept, not basiliximab (which is only mentioned as a comparator induction agent). |
| popPK | Shihab_2014 | irrelevant | 0 | 0 | The paper is a review focusing on the pharmacokinetics of mTOR inhibitors (everolimus, sirolimus) and tacrolimus, with basiliximab mentioned only as a concomitant induction agent without any PK data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:49 UTC</sub>
