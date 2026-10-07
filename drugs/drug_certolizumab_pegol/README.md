<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;certolizumab pegol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CertolizumabPegol_Menshykau2024_reference&quot;,&quot;label&quot;:&quot;Menshykau_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_certolizumab_pegol/CertolizumabPegol_Menshykau2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# certolizumab pegol

- **generic name:** certolizumab pegol
- **ATC codes:** `L04AB05`
- **DrugBank:** [DB08904](https://go.drugbank.com/drugs/DB08904) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Certolizumab pegol is a TNF-alpha inhibitor used to treat inflammatory conditions such as rheumatoid arthritis, Crohn's disease, and ankylosing spondylitis. It is an approved medicine, authorised in the European Union, and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412909](https://www.wikidata.org/wiki/Q412909) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:00 | 2:08 | 1/1/1 | 1/0/1 | 0/0/0 | 188,833/9,734 | einfracz / qwen3.8-27b | 8 | 0/8 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Menshykau_2024_reference](drugs/drug_certolizumab_pegol/CertolizumabPegol_Menshykau2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Menshykau D et al., Population PK modeling of certolizumab…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13220](https://doi.org/10.1002/psp4.13220) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wade_2015_reference](drugs/drug_certolizumab_pegol/CertolizumabPegol_Wade2015_reference.md) | — | 1-compartment (no model) | 5 (+5 cov.) | Wade JR et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2015) | [10.1002/jcph.491](https://doi.org/10.1002/jcph.491) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Vande_2017_reference](drugs/drug_certolizumab_pegol/CertolizumabPegol_Vande2017_reference.md) | — | 1-compartment (no model) | 0 | Vande Casteele N et al., Accounting for Pharmacokinetic Variabil…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0535-3](https://doi.org/10.1007/s40262-017-0535-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2024_TNF_stimulated_inflammation_in_primary_microglia](drugs/drug_certolizumab_pegol/pd_Wang_2024_TNF_stimulated_inflammation_in_primary_microglia.md) | TNF-α-stimulated inflammation in primary microglia ← certolizumab_pegol · direct Emax (saturable) effect | — | Wang D et al., Targeting TNF-α: The therapeutic potent…, International immunopharmac… (2024) | [10.1016/j.intimp.2024.112498](https://doi.org/10.1016/j.intimp.2024.112498) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lacroix_2014_ACR20](drugs/drug_certolizumab_pegol/pd_Lacroix_2014_ACR20.md) | ACR20 ← certolizumab_pegol · categorical (graded) response model | — | Lacroix BD et al., Simultaneous Exposure-Response Modeling…, CPT: pharmacometrics & syst… (2014) | [10.1038/psp.2014.41](https://doi.org/10.1038/psp.2014.41) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lacroix_2014_ACR50](drugs/drug_certolizumab_pegol/pd_Lacroix_2014_ACR50.md) | ACR50 ← certolizumab_pegol · categorical (graded) response model | — | Lacroix BD et al., Simultaneous Exposure-Response Modeling…, CPT: pharmacometrics & syst… (2014) | [10.1038/psp.2014.41](https://doi.org/10.1038/psp.2014.41) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lacroix_2014_ACR70](drugs/drug_certolizumab_pegol/pd_Lacroix_2014_ACR70.md) | ACR70 ← certolizumab_pegol · categorical (graded) response model | — | Lacroix BD et al., Simultaneous Exposure-Response Modeling…, CPT: pharmacometrics & syst… (2014) | [10.1038/psp.2014.41](https://doi.org/10.1038/psp.2014.41) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=certolizumab_pegol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AKR1A1 (substrate), TNF (neutralizer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vande_2017.pdf` | Vande Casteele N et al., Accounting for Pharmacokinetic Variabil…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-017-0535-3](https://doi.org/10.1007/s40262-017-0535-3) | [28353055](https://pubmed.ncbi.nlm.nih.gov/28353055) | The paper reports a population PK model for certolizumab pegol in humans with explicit numeric values for CL/F, V/F, and absorption rate constants. |

<sub>queue written 2026-10-06T23:59:17.191943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brekkan_2024 | irrelevant | 3 | 0 | The paper focuses on a novel statistical model (mixed hidden-Markov model) for characterizing anti-drug antibody (ADA) dynamics; while it utilizes certolizumab pegol PK data as a test case, it does not report new quantitative PK parameter estimates (CL, V, etc.) for the drug itself in the main text, but rather MHMM transition and variance parameters. |
| popPK | Lacroix_2009 | irrelevant | 1 | 0 | The paper describes a pharmacodynamic exposure-response model for clinical outcomes (ACR20) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for certolizumab pegol. |
| popPK | Lacroix_2014 | irrelevant | 1 | 0 | This is an exposure-response modeling study focused on clinical efficacy (ACR scores) rather than a pharmacokinetic study, and it explicitly references a "previously developed one-compartment population model" for PK rather than reporting new PK parameter values. |
| popPK | Lefevre_2022 | relevant | 4 | 2 | The paper reports quantitative clearance thresholds and covariates for certolizumab pegol derived from a population PK model, but the specific numeric parameter estimates (median/mean clearance values) are located in Supplementary Table 1 which is not provided in the evidence. |
| popPK | Paul_2020 | irrelevant | 2 | 0 | The study is an exposure-response analysis reporting plasma concentration thresholds for efficacy, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, half-life) or compartmental PK models. |
| popPK | Steenholdt_2025 | irrelevant | 0 | 0 | The study is a retrospective clinical cohort analyzing treatment outcomes and sequencing, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for certolizumab pegol. |
| popPK | Vande_2018 | irrelevant | 4 | 0 | The paper is an exposure-response analysis using a pre-existing population PK model, and while it reports exposure metrics (AUC, concentrations), it does not report the underlying quantitative disposition parameters (CL, V, ka) which are cited from other sources. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | This is a mechanistic/therapeutic study in mice focusing on neuroinflammation and efficacy (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume for certolizumab pegol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:59 UTC</sub>
