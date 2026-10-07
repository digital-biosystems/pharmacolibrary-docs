<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;ruxolitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ruxolitinib_Polepally2026_reference&quot;,&quot;label&quot;:&quot;Polepally_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ruxolitinib/Ruxolitinib_Polepally2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ruxolitinib

- **generic name:** ruxolitinib
- **ATC codes:** `D11AH09`, `L01EJ01`
- **DrugBank:** [DB08877](https://go.drugbank.com/drugs/DB08877) · **PubChem:** [CID 25126798](https://pubchem.ncbi.nlm.nih.gov/compound/25126798)
- **molar mass:** 306.365 g/mol (C17H18N6) — DrugBank
- **groups:** approved, investigational

## About

Ruxolitinib, a JAK inhibitor, is used for myeloproliferative disorders such as myelofibrosis and polycythemia vera, for graft-versus-host disease, and as a skin preparation for vitiligo. It is approved and authorised in the European Union, with additional investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7383611](https://www.wikidata.org/wiki/Q7383611) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ruxolitinib | parent | 306.365 | C17H18N6 | DrugBank | [25126798](https://pubchem.ncbi.nlm.nih.gov/compound/25126798) | Tachet_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:57 | 5:27 | 1/4/0 | 0/0/1 | 0/0/0 | 257,583/19,693 | einfracz / qwen3.8-27b | 9 | 3/6 | 7/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Polepally_2026_reference](drugs/drug_ruxolitinib/Ruxolitinib_Polepally2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Appeldoorn_2023_reference](drugs/drug_ruxolitinib/Ruxolitinib_Appeldoorn2023_reference.md) | — | 2-compartment (no model) | 4 | Appeldoorn TYJ et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01225-7](https://doi.org/10.1007/s40262-023-01225-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hurwitz_2021_reference](drugs/drug_ruxolitinib/Ruxolitinib_Hurwitz2021_reference.md) | — | 1-compartment (no model) | 0 | Hurwitz SJ et al., Pharmacokinetics of Ruxolitinib in HIV…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1930](https://doi.org/10.1002/jcph.1930) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Isberner_2021_reference](drugs/drug_ruxolitinib/Ruxolitinib_Isberner2021_reference.md) | — | 1-compartment (no model) | 0 | Isberner N et al., Ruxolitinib exposure in patients with a…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04351-w](https://doi.org/10.1007/s00280-021-04351-w) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tachet_2026_reference](drugs/drug_ruxolitinib/Ruxolitinib_Tachet2026_reference.md) | — | 1-compartment (no model) | 4 | Tachet J et al., Ruxolitinib Pharmacokinetics and Exposu…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70367](https://doi.org/10.1002/cpt.70367) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Polepally_2026_PLT](drugs/drug_ruxolitinib/pd_Polepally_2026_PLT.md) | platelet count ← ruxolitinib · indirect response — drug inhibits the loss of platelet count | model (no simulator) | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Polepally_2026_SV](drugs/drug_ruxolitinib/pd_Polepally_2026_SV.md) | spleen volume ← ruxolitinib · indirect response — drug inhibits the production of spleen volume | model (no simulator) | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ruxolitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: JAK1 (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), PLAUR (inhibitor), TYK2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hurwitz_2021.pdf` | Hurwitz SJ et al., Pharmacokinetics of Ruxolitinib in HIV…, Journal of clinical pharmac… (2021) | popPK | 10 | [10.1002/jcph.1930](https://doi.org/10.1002/jcph.1930) | [34169526](https://pubmed.ncbi.nlm.nih.gov/34169526) | The paper reports a population PK model for ruxolitinib in humans with specific quantitative parameters, including apparent oral clearance values (12.9 and 22.5 L/hr). |

<sub>queue written 2026-10-07T07:52:45.915054+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appeldoorn_2023 | irrelevant | 4 | 8 | Although quantitative PK parameters (CL, V, ka, t1/2) for ruxolitinib are present and readable in the text, the paper is a review rather than an original pharmacokinetic study reporting primary data. |
| popPK | Bondeelle_2020 | irrelevant | 0 | 0 | The study evaluates the effect of ruxolitinib on pulmonary function trajectories (FEV1/FVC) in GVHD patients, not its pharmacokinetic parameters. |
| popPK | Ceccacci_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and mechanistic study of ruxolitinib in Hailey-Hailey disease, containing no pharmacokinetic parameter values (CL, V, ka, etc.). |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study focuses on the exposure-response relationship of fedratinib, not ruxolitinib; ruxolitinib is only mentioned as a prior therapy or comparator context. |
| popPK | Deshpande_2012 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on JAK2 mutations conferring resistance to ruxolitinib and reports EC50 values in cell lines, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Febvre-James_2018 | irrelevant | 0 | 0 | The study is in-vitro mechanistic research investigating the effect of ruxolitinib on gene expression, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Li_2023 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| popPK | Tachet_2025 | irrelevant | 0 | 0 | This is a protocol for a prospective observational study that describes the methodology for future pharmacokinetic modeling but does not report any original quantitative PK parameter values for ruxolitinib. |
| popPK | Waitman_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in silico activity of hybrid kinase-HDAC inhibitors, using ruxolitinib only as a pharmacophore reference, and does not report ruxolitinib's PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:53 UTC</sub>
