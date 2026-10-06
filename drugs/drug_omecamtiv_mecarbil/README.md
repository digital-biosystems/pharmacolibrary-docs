<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;omecamtiv mecarbil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OmecamtivMecarbil_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_healthy subjects and patients with heart failure with reduced ejection fraction&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omecamtiv_mecarbil/OmecamtivMecarbil_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# omecamtiv mecarbil

- **generic name:** omecamtiv mecarbil
- **ATC codes:** `C01CX10`
- **DrugBank:** [DB11816](https://go.drugbank.com/drugs/DB11816) · **PubChem:** [CID 11689883](https://pubchem.ncbi.nlm.nih.gov/compound/11689883)
- **molar mass:** 401.442 g/mol (C20H24FN5O3) — DrugBank
- **groups:** investigational

## About

Omecamtiv mecarbil is an investigational cardiac stimulant studied for the treatment of heart failure with reduced pumping function (systolic heart failure). It has not been approved; a marketing application in the European Union was withdrawn, so it remains an investigational drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7089956](https://www.wikidata.org/wiki/Q7089956) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| omecamtiv mecarbil (omecamtiv_mecarbil) | parent | 401.442 | C20H24FN5O3 | DrugBank | [11689883](https://pubchem.ncbi.nlm.nih.gov/compound/11689883) | Chen_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:02 | 4:44 | 1/0/0 | 3/0/0 | 0/0/0 | 107,860/7,907 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Chen_2022_healthy subjects and patients with heart failure with reduced ejection fraction](drugs/drug_omecamtiv_mecarbil/OmecamtivMecarbil_Chen2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Chen PW et al., Population Pharmacokinetic Properties o…, Journal of cardiovascular p… (2022) | [10.1097/FJC.0000000000001207](https://doi.org/10.1097/FJC.0000000000001207) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Nagy_2015_Fpassive](drugs/drug_omecamtiv_mecarbil/pd_Nagy_2015_Fpassive.md) | Ca2+-independent passive force ← omecamtiv mecarbil · direct Emax (saturable) effect | — | Nagy L et al., The novel cardiac myosin activator omec…, British journal of pharmaco… (2015) | [10.1111/bph.13235](https://doi.org/10.1111/bph.13235) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Nagy_2015_pCa50](drugs/drug_omecamtiv_mecarbil/pd_Nagy_2015_pCa50.md) | Ca2+ sensitivity of force production ← omecamtiv mecarbil · direct sigmoid Emax (Hill) effect | — | Nagy L et al., The novel cardiac myosin activator omec…, British journal of pharmaco… (2015) | [10.1111/bph.13235](https://doi.org/10.1111/bph.13235) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Ting_2023_INa_L](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_INa_L.md) | late component of voltage-gated Na+ current ← omecamtiv mecarbil · direct sigmoid Emax (Hill) effect | — | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Ting_2023_INa_T](drugs/drug_omecamtiv_mecarbil/pd_Ting_2023_INa_T.md) | transient component of voltage-gated Na+ current ← omecamtiv mecarbil · direct sigmoid Emax (Hill) effect | — | Ting CY et al., Characterization of Stimulatory Action…, Biomedicines (2023) | [10.3390/biomedicines11051351](https://doi.org/10.3390/biomedicines11051351) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vu_2015_SET](drugs/drug_omecamtiv_mecarbil/pd_Vu_2015_SET.md) | systolic ejection time (SET) ← omecamtiv mecarbil · direct Emax (saturable) effect | — | Vu T et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2015) | [10.1002/jcph.538](https://doi.org/10.1002/jcph.538) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vu_2015_LVOTSV](drugs/drug_omecamtiv_mecarbil/pd_Vu_2015_LVOTSV.md) | Doppler-derived left ventricular outflow tract stroke volume (LVOTSV) ← omecamtiv mecarbil · direct linear effect | model (no simulator) | Vu T et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2015) | [10.1002/jcph.538](https://doi.org/10.1002/jcph.538) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=omecamtiv_mecarbil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MYBPC3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2022.pdf` | Chen PW et al., Population Pharmacokinetic Properties o…, Journal of cardiovascular p… (2022) | popPK | 10 | [10.1097/FJC.0000000000001207](https://doi.org/10.1097/FJC.0000000000001207) | [34983909](https://pubmed.ncbi.nlm.nih.gov/34983909) | The abstract explicitly reports quantitative population PK parameters (clearance, volume, half-life) for omecamtiv mecarbil in humans. |
| `Vu_2015.pdf` | Vu T et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical pharmac… (2015) | popPK | 10 | [10.1002/jcph.538](https://doi.org/10.1002/jcph.538) | [25951506](https://pubmed.ncbi.nlm.nih.gov/25951506) | The paper reports a population PK model for omecamtiv mecarbil in humans with specific numeric values for absorption half-life, bioavailability, and elimination half-life provided in the text. |
| `Tang_2019.pdf` | Tang W et al., Dilated cardiomyopathy mutation in the…, The Journal of biological c… (2019) | pd | 4 | [10.1074/jbc.RA119.010217](https://doi.org/10.1074/jbc.RA119.010217) | [31578282](https://www.ncbi.nlm.nih.gov/pubmed/31578282) | metadata signals extractable PD data (EC50) |
| `Trivedi_2022.pdf` | Trivedi A et al., Pharmacokinetic Evaluation of the CYP3A…, Clinical pharmacology in dr… (2022) | pgx | 8 | [10.1002/cpdd.987](https://doi.org/10.1002/cpdd.987) | [34145992](https://www.ncbi.nlm.nih.gov/pubmed/34145992) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T09:58:24.654588+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Forouzandehmehr_2022 | not_relevant | 0 | 0 | The paper is an in silico modeling study of hypertrophic cardiomyopathy pathophysiology and drug mechanisms, not a pharmacogenomic study reporting how genetic variants affect the PK or PD of omecamtiv mecarbil. |
| popPK | Nagy_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac myosin activation in isolated rat cardiomyocytes and muscle fibers, reporting no pharmacokinetic parameters. |
| popPK | Parikh_2022 | irrelevant | 0 | 0 | The paper describes a mechanistic biophysical model of myofilament contraction in rat myocytes to study the drug's mechanism of action, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Potoskueva_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of muscle physiology and does not report pharmacokinetic parameters. |
| PD | Potoskueva_2025 | not_relevant | 3 | 2 | The study reports qualitative changes in muscle mechanics (velocity, force) at a single fixed concentration (1 μM) and different treatment durations, but does not provide a concentration-response curve or numeric PD parameters (e.g., EC50, Emax) for omecamtiv mecarbil. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Tang_2019 | not_relevant | 0 | 0 | The paper is an in vitro biophysical study of myosin motor activity and does not report in vivo pharmacodynamic or exposure-response data for omecamtiv mecarbil. |
| popPK | Ting_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of omecamtiv mecarbil's effects on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Trivedi_2022 | not_relevant | 2 | 10 | The paper reports a drug-drug interaction (DDI) study where CYP2D6 genotype (EM vs PM) was used for stratification, but the primary effect measured was the change in PK due to co-administered inhibitors (ketoconazole/diltiazem), not a direct pharmacogenomic effect of the genotype on the drug's PK parameters in the absence of the inhibitor. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 09:58 UTC</sub>
