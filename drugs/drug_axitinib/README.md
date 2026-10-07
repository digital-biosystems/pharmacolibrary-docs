<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;axitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Axitinib_Garrett2014_base&quot;,&quot;label&quot;:&quot;Garrett_2014_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Garrett2014_final&quot;,&quot;label&quot;:&quot;Garrett_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Garrett2014_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Rini2013_reference&quot;,&quot;label&quot;:&quot;Rini_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Rini2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Axitinib_Tortorici2014_reference&quot;,&quot;label&quot;:&quot;Tortorici_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_axitinib/Axitinib_Tortorici2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# axitinib

- **generic name:** axitinib
- **ATC codes:** `L01EK01`
- **DrugBank:** [DB06626](https://go.drugbank.com/drugs/DB06626) · **PubChem:** [CID 6450551](https://pubchem.ncbi.nlm.nih.gov/compound/6450551)
- **molar mass:** 386.47 g/mol (C22H18N4OS) — DrugBank
- **groups:** approved, investigational

## About

Axitinib is a protein kinase inhibitor used to treat kidney cancer, especially renal cell carcinoma. It is an approved medicine and is authorised in the European Union for renal cell carcinoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4830631](https://www.wikidata.org/wiki/Q4830631) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| axitinib | parent | 386.47 | C22H18N4OS | DrugBank | [6450551](https://pubchem.ncbi.nlm.nih.gov/compound/6450551) | Chen_2016, Garrett_2014, Ma_2019, Rini_2013, Tortorici_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:43 | 9:23 | 4/0/2 | 2/0/2 | 0/0/0 | 198,450/46,222 | openai / gpt-6-luna | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Garrett_2014_base](drugs/drug_axitinib/Axitinib_Garrett2014_base.md) | ▶ model + simulator | 2-compartment, oral | 7 (+2 cov.) | Garrett M et al., Population pharmacokinetic analysis of…, British journal of clinical… (2014) | [10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Garrett_2014_final](drugs/drug_axitinib/Axitinib_Garrett2014_final.md) | ▶ model + simulator | 2-compartment, oral | 7 (+2 cov.) | Garrett M et al., Population pharmacokinetic analysis of…, British journal of clinical… (2014) | [10.1111/bcp.12206](https://doi.org/10.1111/bcp.12206) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rini_2013_reference](drugs/drug_axitinib/Axitinib_Rini2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rini BI et al., Axitinib in metastatic renal cell carci…, Journal of clinical pharmac… (2013) | [10.1002/jcph.73](https://doi.org/10.1002/jcph.73) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tortorici_2014_reference](drugs/drug_axitinib/Axitinib_Tortorici2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Tortorici MA et al., Pharmacokinetics of single-agent axitin…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2606-6](https://doi.org/10.1007/s00280-014-2606-6) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Chen_2016_reference](drugs/drug_axitinib/Axitinib_Chen2016_reference.md) | — | 1-compartment (no model) | 2 | Chen Y et al., Effect of Renal Impairment on the Pharm…, Targeted oncology (2016) | [10.1007/s11523-015-0389-2](https://doi.org/10.1007/s11523-015-0389-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Ma_2019_reference](drugs/drug_axitinib/Axitinib_Ma2019_reference.md) | — | 1-compartment (no model) | 4 | Ma YH et al., Antitumor effect of axitinib combined w…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-018-0006-x](https://doi.org/10.1038/s41401-018-0006-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cohen_2014_SLD](drugs/drug_axitinib/pd_Cohen_2014_SLD.md) | Maximum percent change from baseline in the sum of longest diameter (SLD) of target lesions ← axitinib · direct linear effect | — | Cohen EE et al., A Phase II trial of axitinib in patient…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2604-8](https://doi.org/10.1007/s00280-014-2604-8) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Ma_2019_TV](drugs/drug_axitinib/pd_Ma_2019_TV.md) | tumor volume ← AX · direct Emax (saturable) effect | model (no simulator) | Ma YH et al., Antitumor effect of axitinib combined w…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-018-0006-x](https://doi.org/10.1038/s41401-018-0006-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2015_2_dBP](drugs/drug_axitinib/pd_Chen_2015_2_dBP.md) | 24-h mean dBP ← axitinib · indirect response — drug stimulates the production of 24-h mean dBP | model (no simulator) | Chen Y et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0207-5](https://doi.org/10.1007/s40262-014-0207-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Cohen_2014_PR](drugs/drug_axitinib/pd_Cohen_2014_PR.md) | Partial response ← axitinib · categorical (graded) response model | — | Cohen EE et al., A Phase II trial of axitinib in patient…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2604-8](https://doi.org/10.1007/s00280-014-2604-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Locati_2014_PFS](drugs/drug_axitinib/pd_Locati_2014_PFS.md) | progression-free survival ← axitinib · time-to-event model | — | Locati LD et al., Treatment of advanced thyroid cancer wi…, Cancer (2014) | [10.1002/cncr.28766](https://doi.org/10.1002/cncr.28766) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=axitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), FLT1 (inhibitor), FLT4 (inhibitor), KDR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 15 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 4  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2016.pdf` | Chen Y et al., Effect of Renal Impairment on the Pharm…, Targeted oncology (2016) | popPK | 10 | [10.1007/s11523-015-0389-2](https://doi.org/10.1007/s11523-015-0389-2) | [26400730](https://pubmed.ncbi.nlm.nih.gov/26400730) | The human population-PK study reports numeric axitinib clearance values across renal-function groups. |
| `Rini_2013.pdf` | Rini BI et al., Axitinib in metastatic renal cell carci…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.73](https://doi.org/10.1002/jcph.73) | [23553560](https://pubmed.ncbi.nlm.nih.gov/23553560) | The population model reports numeric axitinib disposition parameters, including clearance and central volume. |
| `Tortorici_2014.pdf` | Tortorici MA et al., Pharmacokinetics of single-agent axitin…, Cancer chemotherapy and pha… (2014) | popPK | 10 | [10.1007/s00280-014-2606-6](https://doi.org/10.1007/s00280-014-2606-6) | [25336084](https://pubmed.ncbi.nlm.nih.gov/25336084) | A population two-compartment model reports numeric axitinib disposition parameters in the evidence. |
| `Chen_2015_2.pdf` | Chen Y et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacokinetics (2015) | popPK | 9 | [10.1007/s40262-014-0207-5](https://doi.org/10.1007/s40262-014-0207-5) | [25343945](https://pubmed.ncbi.nlm.nih.gov/25343945) | This is a human axitinib population PK/PD study, but the evidence gives no numeric PK disposition parameters. |
| `Chen_2015.pdf` | Chen Y et al., Axitinib plasma pharmacokinetics and et…, Investigational new drugs (2015) | popPK | 8 | [10.1007/s10637-015-0214-x](https://doi.org/10.1007/s10637-015-0214-x) | [25663295](https://pubmed.ncbi.nlm.nih.gov/25663295) | The evidence describes human axitinib and population-PK analyses, but provides no numeric disposition parameter values. |

<sub>queue written 2026-10-06T21:35:09.573067+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2013 | irrelevant | 2 | 1 | This review mentions a two-compartment population-PK model but provides no numeric model parameter estimates. |
| popPK | Chen_2015 | relevant | 8 | 0 | The evidence describes human axitinib and population-PK analyses, but provides no numeric disposition parameter values. |
| popPK | Chen_2015_2 | relevant | 9 | 1 | This is a human axitinib population PK/PD study, but the evidence gives no numeric PK disposition parameters. |
| popPK | Cohen_2014 | relevant | 9 | 1 | Human population-PK analysis is reported, but numeric clearance/AUC parameter values are not shown and appear to be confined to figures or supplementary material. |
| popPK | Locati_2014 | irrelevant | 2 | 0 | The human study assesses axitinib exposure but reports no quantitative disposition parameters or values in the provided evidence. |
| popPK | Masters_2022 | irrelevant | 1 | 0 | Axitinib is only coadministered; the reported PK model and numeric parameters are for avelumab, with no axitinib parameter values provided. |
| popPK | Oldani_2024 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study and reports no axitinib disposition parameters. |
| popPK | Rini_2013_2 | irrelevant | 1 | 0 | This clinical trial reports efficacy and safety, not quantitative axitinib disposition parameters; population-PK data are only mentioned in the background. |
| popPK | Shafrin_2017 | irrelevant | 3 | 2 | This simulates axitinib exposure using previously published PK models and reports AUCs, but no numeric disposition-model parameters are provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:36 UTC</sub>
