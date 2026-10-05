<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;aprepitant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aprepitant_Nijstad2023_reference&quot;,&quot;label&quot;:&quot;Nijstad_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aprepitant

- **generic name:** aprepitant
- **ATC codes:** `A04AD12`
- **DrugBank:** [DB00673](https://go.drugbank.com/drugs/DB00673) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aprepitant is an antiemetic (an NK1 receptor antagonist) used to prevent nausea and vomiting, including chemotherapy-induced and postoperative nausea and vomiting. It is authorised in the European Union and is widely used, mainly in cancer care to help control vomiting caused by treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q621834](https://www.wikidata.org/wiki/Q621834) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aprepitant | parent | 534.432 | C23H21F7N4O3 | PubChem | [135413536](https://pubchem.ncbi.nlm.nih.gov/compound/135413536) | Nakade_2008, Nijstad_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:47 | 4:54 | 1/1/0 | 0/0/0 | 0/0/0 | 64,208/15,509 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Nijstad_2023_reference](drugs/drug_aprepitant/Aprepitant_Nijstad2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Nijstad AL et al., A simple extemporaneous oral suspension…, Journal of oncology pharmac… (2023) | [10.1177/10781552221089243](https://doi.org/10.1177/10781552221089243) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nakade_2008_reference](drugs/drug_aprepitant/Aprepitant_Nakade2008_reference.md) | — | 1-compartment (no model) | 5 | Nakade S et al., Population pharmacokinetics of aprepita…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-008-0713-y](https://doi.org/10.1007/s00280-008-0713-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aprepitant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C9` inducer/inhibitor, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TACR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chain_2020.pdf` | Chain A et al., Modeling and Simulation Analysis of Apr…, The journal of pediatric ph… (2020) | popPK | 10 | [10.5863/1551-6776-25.6.528](https://doi.org/10.5863/1551-6776-25.6.528) | [32839657](https://pubmed.ncbi.nlm.nih.gov/32839657) | The paper describes a population PK model for aprepitant in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Nakade_2008.pdf` | Nakade S et al., Population pharmacokinetics of aprepita…, Cancer chemotherapy and pha… (2008) | popPK | 10 | [10.1007/s00280-008-0713-y](https://doi.org/10.1007/s00280-008-0713-y) | [18317761](https://pubmed.ncbi.nlm.nih.gov/18317761) | The paper reports a population pharmacokinetic model for aprepitant with explicit numeric values for CL/F, Vd/F, Ka, and lag time in the abstract. |
| `Shono_2010.pdf` | Shono Y et al., Forecasting in vivo oral absorption and…, European journal of pharmac… (2010) | popPK | 8 | [10.1016/j.ejpb.2010.05.009](https://doi.org/10.1016/j.ejpb.2010.05.009) | [20576487](https://pubmed.ncbi.nlm.nih.gov/20576487) | The study reports a PBPK model for aprepitant in humans, but specific numeric parameter values (CL, V, ka) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |

<sub>queue written 2026-10-04T13:43:17.715062+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chain_2020 | relevant | 10 | 0 | The paper describes a population PK model for aprepitant in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Imbs_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pazopanib and cisplatin, with aprepitant mentioned only as a co-administered antiemetic agent potentially causing interaction, not as the subject of PK parameter estimation. |
| popPK | Nijstad_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of dexamethasone and the effect of aprepitant on it, rather than reporting quantitative disposition parameters for aprepitant itself. |
| popPK | Shadle_2012 | irrelevant | 2 | 0 | The study is a bioequivalence assessment reporting AUC ratios and P-values, but does not provide quantitative disposition parameters (CL, V, ka, t1/2) for aprepitant. |
| popPK | Shono_2010 | relevant | 8 | 2 | The study reports a PBPK model for aprepitant in humans, but specific numeric parameter values (CL, V, ka) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |
| popPK | Valentin_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ifosfamide and its metabolites, using aprepitant only as a co-administered agent to test for drug-drug interactions, without reporting PK parameters for aprepitant itself. |
| popPK | de_2005 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide and thiotepa in the presence of aprepitant, not on the disposition parameters of aprepitant itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:43 UTC</sub>
