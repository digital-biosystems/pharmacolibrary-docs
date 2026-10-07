<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;veliparib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Veliparib_Salem2014_reference&quot;,&quot;label&quot;:&quot;Salem_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_veliparib/Veliparib_Salem2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# veliparib

- **generic name:** veliparib
- **ATC codes:** `L01XK05`
- **DrugBank:** [DB07232](https://go.drugbank.com/drugs/DB07232) · **PubChem:** [CID 11960529](https://pubchem.ncbi.nlm.nih.gov/compound/11960529)
- **molar mass:** 244.2923 g/mol (C13H16N4O) — DrugBank
- **groups:** investigational

## About

Veliparib is a PARP inhibitor being studied as an anticancer treatment. It remains investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7919041](https://www.wikidata.org/wiki/Q7919041) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| veliparib | parent | 244.292 | C13H16N4O | DrugBank | [11960529](https://pubchem.ncbi.nlm.nih.gov/compound/11960529) | Niu_2017, Salem_2014, Stodtmann_2021 |
| M8 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:51 | 2:22 | 1/2/1 | 0/0/2 | 0/0/0 | 68,980/38,826 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Salem_2014_reference](drugs/drug_veliparib/Veliparib_Salem2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Salem AH et al., Population pharmacokinetic modeling of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-013-0130-1](https://doi.org/10.1007/s40262-013-0130-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Stodtmann_2021_reference](drugs/drug_veliparib/Veliparib_Stodtmann2021_reference.md) | — | 1-compartment (no model) | 3 (+6 cov.) | Stodtmann S et al., A Population Pharmacokinetic Meta-Analy…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1875](https://doi.org/10.1002/jcph.1875) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mehrotra_2017_reference](drugs/drug_veliparib/Veliparib_Mehrotra2017_reference.md) | — | 1-compartment (no model) | 0 | Mehrotra S et al., Population pharmacokinetics and site of…, British journal of clinical… (2017) | [10.1111/bcp.13253](https://doi.org/10.1111/bcp.13253) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Niu_2017_reference](drugs/drug_veliparib/Veliparib_Niu2017_reference.md) | — | parent + metabolite (no model) | 2 | Niu J et al., Parent-Metabolite Pharmacokinetic Model…, Journal of clinical pharmac… (2017) | [10.1002/jcph.892](https://doi.org/10.1002/jcph.892) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mehrotra_2017_2_OR](drugs/drug_veliparib/pd_Mehrotra_2017_2_OR.md) | objective response ← veliparib · categorical (graded) response model | — | Mehrotra S et al., Exposure-Response of Veliparib to Infor…, Clinical cancer research :… (2017) | [10.1158/1078-0432.CCR-17-0143](https://doi.org/10.1158/1078-0432.CCR-17-0143) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mehrotra_2017_2_OS](drugs/drug_veliparib/pd_Mehrotra_2017_2_OS.md) | overall survival ← veliparib · time-to-event model | — | Mehrotra S et al., Exposure-Response of Veliparib to Infor…, Clinical cancer research :… (2017) | [10.1158/1078-0432.CCR-17-0143](https://doi.org/10.1158/1078-0432.CCR-17-0143) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mehrotra_2017_2_grade_3_mucositis](drugs/drug_veliparib/pd_Mehrotra_2017_2_grade_3_mucositis.md) | ≥grade 3 mucositis ← veliparib · categorical (graded) response model | — | Mehrotra S et al., Exposure-Response of Veliparib to Infor…, Clinical cancer research :… (2017) | [10.1158/1078-0432.CCR-17-0143](https://doi.org/10.1158/1078-0432.CCR-17-0143) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Stodtmann_2022_PFS](drugs/drug_veliparib/pd_Stodtmann_2022_PFS.md) | progression-free survival ← veliparib · time-to-event model | — | Stodtmann S et al., Exposure-Response Model With Time-Varyi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2061](https://doi.org/10.1002/jcph.2061) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=veliparib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PARP1 (unknown), PARP2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mehrotra_2017.pdf` | Mehrotra S et al., Population pharmacokinetics and site of…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13253](https://doi.org/10.1111/bcp.13253) | [28156017](https://pubmed.ncbi.nlm.nih.gov/28156017) | The paper reports a population PK model for veliparib with specific values for CL/F and Vc/F, though other parameters like half-life and Q are not explicitly stated in the evidence. |
| `Niu_2017.pdf` | Niu J et al., Parent-Metabolite Pharmacokinetic Model…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.892](https://doi.org/10.1002/jcph.892) | [28387939](https://pubmed.ncbi.nlm.nih.gov/28387939) | The paper explicitly reports a population PK model for veliparib and provides numeric estimates for clearance, central volume, and peripheral volume in the text. |
| `Salem_2014.pdf` | Salem AH et al., Population pharmacokinetic modeling of…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-013-0130-1](https://doi.org/10.1007/s40262-013-0130-1) | [24452810](https://pubmed.ncbi.nlm.nih.gov/24452810) | The paper reports quantitative population pharmacokinetic parameters (CL/F and V/F) for veliparib in humans directly in the text. |
| `Nuthalapati_2019.pdf` | Nuthalapati S et al., Exposure-response analysis to inform th…, Cancer chemotherapy and pha… (2019) | popPK | 9 | [10.1007/s00280-019-03930-2](https://doi.org/10.1007/s00280-019-03930-2) | [31468137](https://pubmed.ncbi.nlm.nih.gov/31468137) | The paper is a population PK study of veliparib in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Singh_2019.pdf` | Singh R et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2019) | popPK | 9 | [10.1007/s00280-018-3731-4](https://doi.org/10.1007/s00280-018-3731-4) | [30456480](https://pubmed.ncbi.nlm.nih.gov/30456480) | The paper is a population PK study of veliparib in humans, but no specific numeric parameter values (CL, V, Ka) are provided in the extracted evidence. |

<sub>queue written 2026-10-06T21:49:08.568020+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hassan_2017 | irrelevant | 0 | 0 | The study reports in-vitro pharmacodynamic biomarkers (EC50 for 53BP1 foci) rather than pharmacokinetic disposition parameters for veliparib. |
| popPK | Mehrotra_2017_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis focusing on clinical endpoints (efficacy and safety) rather than reporting specific pharmacokinetic disposition parameters (CL, V, Q, ka) or compartmental model parameters. |
| popPK | Nuthalapati_2019 | relevant | 9 | 0 | The paper is a population PK study of veliparib in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Singh_2019 | relevant | 9 | 0 | The paper is a population PK study of veliparib in humans, but no specific numeric parameter values (CL, V, Ka) are provided in the extracted evidence. |
| popPK | Stodtmann_2022 | irrelevant | 2 | 0 | The study focuses on exposure-response relationships for efficacy and safety rather than quantifying specific pharmacokinetic disposition parameters (CL, V, ka, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:50 UTC</sub>
