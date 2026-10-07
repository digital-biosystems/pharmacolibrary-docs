<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;leflunomide&quot;}]"></div>

# leflunomide

- **generic name:** leflunomide
- **ATC codes:** `L04AA13`, `L04AK01`
- **DrugBank:** [DB01097](https://go.drugbank.com/drugs/DB01097) · **PubChem:** [CID 3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899)
- **molar mass:** 270.2073 g/mol (C12H9F3N2O2) — DrugBank
- **groups:** approved, investigational

## About

Leflunomide is an immunosuppressive disease-modifying antirheumatic drug used to treat rheumatoid arthritis and psoriatic arthritis. It is approved and authorised in the European Union, where several products remain on the market, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q248550](https://www.wikidata.org/wiki/Q248550) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| leflunomide | parent | 270.207 | C12H9F3N2O2 | DrugBank | [3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899) | Hopkins_2015, Li_2002 |
| A77 1726 | metabolite | — (mass units only) | — | — | — | — |
| A771726 | metabolite | — (mass units only) | — | — | — | — |
| tereflunomide | metabolite | — (mass units only) | — | — | — | — |
| teriflunomide | metabolite | 270.21 | C12H9F3N2O2 | PubChem | [54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141) | Hopkins_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:02 | 4:30 | 0/4/3 | 0/0/0 | 0/0/0 | 337,549/33,389 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_base](drugs/drug_leflunomide/Leflunomide_Hopkins2015_base.md) | — | parent + metabolite (no model) | 5 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_full](drugs/drug_leflunomide/Leflunomide_Hopkins2015_full.md) | — | parent + metabolite (no model) | 4 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q305 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_initial_literature_estimate](drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate.md) | — | parent + metabolite (no model) | 13 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bohanec_2009_reference](drugs/drug_leflunomide/Leflunomide_Bohanec2009_reference.md) | — | 1-compartment (no model) | 0 | Bohanec Grabar P et al., Investigation of the influence of CYP1A…, Drug metabolism and disposi… (2009) | [10.1124/dmd.109.027482](https://doi.org/10.1124/dmd.109.027482) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chan_2005_reference](drugs/drug_leflunomide/Leflunomide_Chan2005_reference.md) | — | 1-compartment (no model) | 0 | Chan V et al., Population pharmacokinetics and associa…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02415.x](https://doi.org/10.1111/j.1365-2125.2005.02415.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Li_2002_reference](drugs/drug_leflunomide/Leflunomide_Li2002_reference.md) | — | 1-compartment (no model) | 5 | Li J et al., Pharmacokinetics of leflunomide in Chin…, Acta pharmacologica Sinica (2002) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Shi_2005_reference](drugs/drug_leflunomide/Leflunomide_Shi2005_reference.md) | — | 1-compartment (no model) | 0 | Shi J et al., Population pharmacokinetics of the acti…, Journal of pharmacokinetics… (2005) | [10.1007/s10928-005-0049-8](https://doi.org/10.1007/s10928-005-0049-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=leflunomide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AHR (target), DHODH (inhibitor), PTK2B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs_review 3  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bohanec_2009.pdf` | Bohanec Grabar P et al., Investigation of the influence of CYP1A…, Drug metabolism and disposi… (2009) | popPK | 10 | [10.1124/dmd.109.027482](https://doi.org/10.1124/dmd.109.027482) | [19581389](https://pubmed.ncbi.nlm.nih.gov/19581389) | The study models the pharmacokinetics of leflunomide's active metabolite (A77 1726), reporting quantitative estimates for oral clearance (CL/F) and volume of distribution (V/F) derived from a population model in humans. |
| `Chan_2005.pdf` | Chan V et al., Population pharmacokinetics and associa…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02415.x](https://doi.org/10.1111/j.1365-2125.2005.02415.x) | [16120064](https://pubmed.ncbi.nlm.nih.gov/16120064) | The study is a population PK model of leflunomide (via its active metabolite A77 1726) in humans, and the specific numeric values for CL/F and variability are provided in the abstract text. |
| `Li_2002.pdf` | Li J et al., Pharmacokinetics of leflunomide in Chin…, Acta pharmacologica Sinica (2002) | popPK | 10 | not captured | [12060531](https://pubmed.ncbi.nlm.nih.gov/12060531) | The study reports quantitative pharmacokinetic parameters for leflunomide's active metabolite A771726, including half-life, Cmax, and AUC. |
| `Mehl_2012.pdf` | Mehl ML et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2012) | popPK | 10 | [10.1111/j.1365-2885.2011.01306.x](https://doi.org/10.1111/j.1365-2885.2011.01306.x) | [21615755](https://pubmed.ncbi.nlm.nih.gov/21615755) | The abstract reports specific quantitative pharmacokinetic parameters (ka, kel, t1/2, AUC, Cmax, bioavailability) for leflunomide in cats. |
| `Shi_2005.pdf` | Shi J et al., Population pharmacokinetics of the acti…, Journal of pharmacokinetics… (2005) | popPK | 10 | [10.1007/s10928-005-0049-8](https://doi.org/10.1007/s10928-005-0049-8) | [16284916](https://pubmed.ncbi.nlm.nih.gov/16284916) | The paper reports a population pharmacokinetic model for leflunomide's active metabolite M1 with specific equations for clearance and volume of distribution. |
| `Shin_2023.pdf` | Shin Y et al., Development of a population pharmacokin…, European journal of pharmac… (2023) | popPK | 9 | [10.1016/j.ejps.2023.106402](https://doi.org/10.1016/j.ejps.2023.106402) | [36754259](https://pubmed.ncbi.nlm.nih.gov/36754259) | The paper is a population PK study of leflunomide's active metabolite (A771726) in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text, only the model structure and qualitative results. |
| `Yao_2019.pdf` | Yao X et al., A population pharmacokinetic study to a…, European journal of pharmac… (2019) | popPK | 9 | [10.1016/j.ejps.2019.05.020](https://doi.org/10.1016/j.ejps.2019.05.020) | [31154006](https://pubmed.ncbi.nlm.nih.gov/31154006) | The study performs a population PK analysis of leflunomide (specifically for its metabolite teriflunomide) in humans, but the specific numeric parameter values are likely contained in the full text or tables not provided in the abstract evidence. |

<sub>queue written 2026-10-06T23:58:36.027340+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | The study focuses on a time-to-event model for drug cessation and pharmacogenetics, rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for leflunomide or teriflunomide. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper is a narrative review of the antiviral efficacy of leflunomide in COVID-19 and does not report population pharmacokinetic parameters (CL, V, etc.). |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The paper is an in vitro antiviral efficacy study of teriflunomide and leflunomide against SARS-CoV-2, reporting only EC50/CC50 values, with no pharmacokinetic parameters (CL, V, t1/2, etc.) for leflunomide. |
| popPK | Shin_2023 | relevant | 9 | 1 | The paper is a population PK study of leflunomide's active metabolite (A771726) in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text, only the model structure and qualitative results. |
| popPK | Thanigaimani_2022 | irrelevant | 0 | 0 | The paper examines the association of immunosuppressant drug use (including leflunomide) with abdominal aortic aneurysm growth and does not report any pharmacokinetic parameters for leflunomide. |
| popPK | Wiese_2021 | irrelevant | 2 | 0 | The study is a pharmacogenomic/pharmacodynamic analysis of therapeutic response and teriflunomide concentration thresholds, not a pharmacokinetic study reporting disposition parameters like CL, V, or t1/2. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The study focuses on novel DHODH inhibitors (S312 and S416) and their antiviral properties, using leflunomide only as a comparator or reference compound without reporting its specific pharmacokinetic parameters. |
| popPK | Yao_2019 | relevant | 9 | 2 | The study performs a population PK analysis of leflunomide (specifically for its metabolite teriflunomide) in humans, but the specific numeric parameter values are likely contained in the full text or tables not provided in the abstract evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:58 UTC</sub>
