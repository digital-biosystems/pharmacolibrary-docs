<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;ivacaftor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivacaftor_Truong2025_reference&quot;,&quot;label&quot;:&quot;Truong_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ivacaftor_Vonk2025_reference&quot;,&quot;label&quot;:&quot;Vonk_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/Ivacaftor_Vonk2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ivacaftor

- **generic name:** ivacaftor
- **ATC codes:** `R07AX02`, `R07AX30`, `R07AX31`
- **DrugBank:** [DB08820](https://go.drugbank.com/drugs/DB08820)
- **groups:** approved, investigational

## About

**Description.** Ivacaftor (also known as Kalydeco or VX-770) is a drug used for the management of Cystic Fibrosis (CF). It is manufactured and distributed by Vertex Pharmaceuticals. It was approved by the Food and Drug Administration on January 31, 2012[L768], and by Health Canada in late 2012.[L6841]  Ivacaftor is administered as a monotherapy and also administered in combination with other drugs for the management of CF.[L6814,L6979,L6847]

Cystic Fibrosis is an autosomal recessive disorder caused by one of several different mutations in the gene for the Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) protein, an ion channel involved in the transport of chloride and sodium ions across cell membranes. CFTR is active in epithelial cells of organs such as of the lungs, pancreas, liver, digestive system, and reproductive tract. Alterations in the CFTR gene result in altered production, misfolding, or function of the protein and consequently abnormal fluid and ion transport across cell membranes.[A20298, A20299] As a result, CF patients produce thick, sticky mucus that clogs the ducts of organs where it is produced making patients more susceptible to complications such as infections, lung damage, pancreatic insufficiency, and malnutrition.[A20302]

Prior to the development of ivacaftor, management of CF primarily involved therapies for the control of infections, nutritional support, clearance of mucus, and management of symptoms rather than improvements in the underlying disease process or lung function (FEV1). Notably, ivacaftor was the first medication approved for the management of the underlying causes of CF (abnormalities in CFTR protein function) rather than control of symptoms.[A20297]

**Indication.** When used as monotherapy as the product Kalydeco, ivacaftor is indicated for the treatment of cystic fibrosis (CF) in patients aged one month and older who have one mutation in the CFTR gene that is responsive to ivacaftor potentiation based on clinical and/or _in vitro_ assay data.[L41320, L46337]

When used in combination with the drug [lumacaftor] as the product Orkambi, ivacaftor is indicated for the management of CF in patients aged one year and older who are homozygous for the _F508del_ mutation in the CFTR gene. If the patient’s genotype is unknown, an FDA-cleared CF mutation test should be used to detect the presence of the _F508del_ mutation on both alleles of the CFTR gene.[L43060]

When used in combination with [tezacaftor] in the product Symdeko, it is used to manage CF in patients 12 years and older who have at least one mutation in the CFTR gene or patients aged 12 or older who are shown to be homozygous for the F508del mutation.[L6814]

When used in combination with tezacaftor and [elexacaftor] in the product Trikafta, it is indicated for the treatment of cystic fibrosis in patients 12 years of age and older who have at least one _F508del_ mutation in the CFTR gene.[L9395]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 13 | 4/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.692). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Truong_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) | Truong NH et al., Elexacaftor/Tezacaftor/Ivacaftor Popula…, Clinical and translational… (2025) | [10.1111/cts.70245](https://doi.org/10.1111/cts.70245) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_reference.md) | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ivacaftor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` carrier, `ORM1` carrier | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…oral administration, ivacaftor is mainly eliminated in the feces after metabolic conversio…”</sub> | prose |
| excretion | kidney | <sub>“…being 22% for M1 and 43% for M6. Ivacaftor shows negligible urinary excretion as the uncha…”</sub> | prose |

<sub>Actors without a tissue in the table: CFTR (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magnas_2025.pdf` | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | popPK | 7 | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) | [40405059](https://pubmed.ncbi.nlm.nih.gov/40405059) | Ivacaftor is a subject of the ETI Pop-PK model, but only summary exposure ranges are shown here; numeric PK parameters likely require the full model tables/supplementary material not provided. |

<sub>queue written 2026-07-18T20:47:30.269090+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Magnas_2025 | relevant | 7 | 3 | Ivacaftor is a subject of the ETI Pop-PK model, but only summary exposure ranges are shown here; numeric PK parameters likely require the full model tables/supplementary material not provided. |
| popPK | Semenchuk_2024 | irrelevant | 0 | 0 | This is a COVID-19 outcomes study in cystic fibrosis, not a pharmacokinetic study of ivacaftor, and no ivacaftor PK parameters are reported. |
| popPK | Steinberg_2025 | irrelevant | 1 | 0 | This is a microbiome/clinical ETI paper and does not report ivacaftor population-PK parameters; any drug-related numbers are clinical outcomes, not PK values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:44 UTC</sub>
