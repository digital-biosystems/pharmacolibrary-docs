<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;daclatasvir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daclatasvir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daclatasvir_Wang2018_dcv_estimate_rse&quot;,&quot;label&quot;:&quot;Wang_2018_dcv_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# daclatasvir

- **generic name:** daclatasvir
- **ATC codes:** `J05AP07`
- **DrugBank:** [DB09102](https://go.drugbank.com/drugs/DB09102) · **PubChem:** [CID 25154714](https://pubchem.ncbi.nlm.nih.gov/compound/25154714)
- **molar mass:** 738.89 g/mol (C40H50N8O6) — DrugBank
- **groups:** approved, withdrawn

## About

Daclatasvir is an antiviral drug used to treat chronic hepatitis C, including in patients with liver cirrhosis. It was authorised in the European Union but that authorisation has expired, so it is no longer marketed there, though it has been included in the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5207712](https://www.wikidata.org/wiki/Q5207712) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daclatasvir | parent | 738.89 | C40H50N8O6 | DrugBank | [25154714](https://pubchem.ncbi.nlm.nih.gov/compound/25154714) | Al-Nahari_2020, Osawa_2018, Wang_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:39 | 6:36 | 2/2/2 | 1/0/1 | 0/0/0 | 299,226/28,787 | ollama / glm-5.3-flash | 10 | 3/7 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Osawa_2018_reference](drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Osawa M et al., Population Pharmacokinetic Analysis for…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1274](https://doi.org/10.1002/jcph.1274) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2018_dcv_estimate_rse](drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse.md) | ▶ model + simulator | 2-compartment, oral | 5 | Wang HC et al., Integrated pharmacokinetic/viral dynami…, Acta pharmacologica Sinica (2018) | [10.1038/aps.2017.84](https://doi.org/10.1038/aps.2017.84) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018_asv_estimate_rse](drugs/drug_daclatasvir/Daclatasvir_Wang2018_asv_estimate_rse.md) | — | 2-compartment (no model) | 7 | Wang HC et al., Integrated pharmacokinetic/viral dynami…, Acta pharmacologica Sinica (2018) | [10.1038/aps.2017.84](https://doi.org/10.1038/aps.2017.84) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018_estimate_rse](drugs/drug_daclatasvir/Daclatasvir_Wang2018_estimate_rse.md) | — | 1-compartment (no model) | 2 | Wang HC et al., Integrated pharmacokinetic/viral dynami…, Acta pharmacologica Sinica (2018) | [10.1038/aps.2017.84](https://doi.org/10.1038/aps.2017.84) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Al-Nahari_2020_reference](drugs/drug_daclatasvir/Daclatasvir_AlNahari2020_reference.md) | — | 1-compartment (no model) | 6 | Al-Nahari MM et al., Pharmacokinetics of daclatasvir in Egyp…, Antiviral therapy (2020) | [10.3851/IMP3357](https://doi.org/10.3851/IMP3357) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cressey_2021_reference](drugs/drug_daclatasvir/Daclatasvir_Cressey2021_reference.md) | — | 1-compartment (no model) | 0 | Cressey TR et al., Effective and Safe Daclatasvir Drug Exp…, The Pediatric infectious di… (2021) | [10.1097/INF.0000000000003282](https://doi.org/10.1097/INF.0000000000003282) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ueno_2019_SVR12](drugs/drug_daclatasvir/pd_Ueno_2019_SVR12.md) | sustained virologic response at posttreatment week 12 ← daclatasvir · direct linear effect | — | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ueno_2018_SVR12](drugs/drug_daclatasvir/pd_Ueno_2018_SVR12.md) | sustained virologic response at 12 weeks after treatment (SVR12) ← daclatasvir (with asunaprevir interaction) · direct linear effect | model (no simulator) | Ueno T et al., Exposure-Response (Efficacy) Analysis o…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1262](https://doi.org/10.1002/jcph.1262) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=daclatasvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP3A43 (substrate), Genome polyprotein (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 19 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 2  ·  needs_review 2  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Nahari_2020.pdf` | Al-Nahari MM et al., Pharmacokinetics of daclatasvir in Egyp…, Antiviral therapy (2020) | popPK | 10 | [10.3851/IMP3357](https://doi.org/10.3851/IMP3357) | [32367815](https://pubmed.ncbi.nlm.nih.gov/32367815) | Population PK model of daclatasvir with full numeric parameters (K0, V/F, CL/F) reported directly in the abstract. |
| `Cressey_2021.pdf` | Cressey TR et al., Effective and Safe Daclatasvir Drug Exp…, The Pediatric infectious di… (2021) | popPK | 10 | [10.1097/INF.0000000000003282](https://doi.org/10.1097/INF.0000000000003282) | [34321444](https://pubmed.ncbi.nlm.nih.gov/34321444) | Population PK model of daclatasvir in HCV-infected adolescents with exposure metrics (AUC, Cmax, Cmin) reported, but full CL/V parameter values may be in supplementary material not provided. |
| `Osawa_2019.pdf` | Osawa M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.649](https://doi.org/10.1002/cpdd.649) | [30629858](https://pubmed.ncbi.nlm.nih.gov/30629858) | Population PK model for daclatasvir in HCV patients is described, but no numeric parameter values (CL, V, etc.) appear in the evidence. |

<sub>queue written 2026-10-07T15:33:53.910156+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_2017 | irrelevant | 3 | 0 | The evidence contains only garbled plot symbols with no readable text, tables, or numeric PK parameters for daclatasvir; any values would live in figures/supplements not provided. |
| popPK | Gao_2013 | irrelevant | 0 | 0 | This is a review of antiviral activity and resistance mechanisms of NS5A inhibitors with no pharmacokinetic parameters for daclatasvir. |
| popPK | Garimella_2014 | irrelevant | 3 | 2 | Daclatasvir is the perpetrator drug; PK parameters (AUC ratios) are reported for methadone/buprenorphine, not for DCV itself, and no DCV disposition parameters are given. |
| popPK | McPhee_2012 | irrelevant | 0 | 0 | Paper is about asunaprevir's preclinical PK; daclatasvir is only mentioned as a co-administered comparator with no PK parameters for it. |
| popPK | Nasr_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on synthesis of NS5B inhibitors; daclatasvir is only mentioned as a keyword, with no PK parameters. |
| popPK | Osawa_2019 | relevant | 10 | 3 | Population PK model for daclatasvir in HCV patients is described, but no numeric parameter values (CL, V, etc.) appear in the evidence. |
| popPK | Osawa_2019_2 | irrelevant | 2 | 1 | This is an exposure-response safety analysis where daclatasvir is only a co-administered drug; the PopPK models and numeric parameters are for asunaprevir and beclabuvir, with no daclatasvir disposition parameters reported. |
| popPK | Smolders_2017 | irrelevant | 3 | 5 | Daclatasvir is the co-administered OCT-inhibitor probe while metformin is the subject drug; only a few NCA daclatasvir values (AUC0-24 18.38, Cmax 1.85, C24 0.30, T1/2 11.23 h) appear, with no compartmental/population-PK model for daclatasvir. |
| popPK | Ueno_2018 | irrelevant | 5 | 2 | This is an exposure-response (efficacy) analysis; DCV popPK models are only referenced (parameters in supplementary material/manuscript in preparation) and no DCV CL/V or popPK parameter values appear in the evidence. |
| popPK | Ueno_2019 | irrelevant | 3 | 2 | This is an exposure-response efficacy analysis using logistic regression on exposure metrics; no PK disposition parameters (CL, V, Q, ka) for daclatasvir are reported, and any exposure values are not numerically present. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | This is an in-vitro antiviral drug discovery/synergy study; daclatasvir is only a co-administered comparator with no PK parameters reported. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | This is a health-economic cost-effectiveness evaluation of hepatitis C treatments; daclatasvir appears only as a comparator with prices/efficacy ratios, no PK parameters. |
| popPK | Zappulo_2020 | irrelevant | 2 | 0 | A narrative review discussing PK qualitatively with no numeric daclatasvir disposition parameters present in the evidence. |
| popPK | Zhu_2018 | irrelevant | 1 | 0 | This is a population PK study of asunaprevir; daclatasvir is only a co-administered drug in the DUAL/QUAD regimens, with no DCV PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:34 UTC</sub>
