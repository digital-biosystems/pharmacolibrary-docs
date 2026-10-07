<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;lamivudine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamivudine_Chandasana2024v2_reference&quot;,&quot;label&quot;:&quot;Chandasana_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lamivudine

- **generic name:** lamivudine
- **ATC codes:** `J05AF05`, `J05AR01`, `J05AR02`, `J05AR04`, `J05AR05`, `J05AR07`, `J05AR12`, `J05AR16`, `J05AR25`, `J05AR28`
- **DrugBank:** [DB00709](https://go.drugbank.com/drugs/DB00709) · **PubChem:** [CID 60825](https://pubchem.ncbi.nlm.nih.gov/compound/60825)
- **molar mass:** 229.256 g/mol (C8H11N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Lamivudine is an antiviral nucleoside analogue used to treat HIV infection and chronic hepatitis B. It is widely used, appears on the WHO essential medicines list, and is authorised in the European Union for HIV and hepatitis B, often in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422631](https://www.wikidata.org/wiki/Q422631) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lamivudine | parent | 229.256 | C8H11N3O3S | DrugBank | [60825](https://pubchem.ncbi.nlm.nih.gov/compound/60825) | Chandasana_2024, Chandasana_2024_2, Ojara_2024, Piana_2014, Sabo_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:11 | 4:00 | 1/1/3 | 1/0/0 | 0/0/0 | 330,196/20,761 | einfracz / qwen3.8-27b | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chandasana_2024_2_reference](drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 (+6 cov.) | Chandasana H et al., Population pharmacokinetic modeling of…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01504-23](https://doi.org/10.1128/aac.01504-23) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Ojara_2024_reference](drugs/drug_lamivudine/Lamivudine_Ojara2024_reference.md) | — | 1-compartment (no model) | 4 | Ojara FW et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13274](https://doi.org/10.1002/psp4.13274) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Piana_2014_reference](drugs/drug_lamivudine/Lamivudine_Piana2014_reference.md) | — | 1-compartment (no model) | 5 | Piana C et al., Covariate effects and population pharma…, British journal of clinical… (2014) | [10.1111/bcp.12247](https://doi.org/10.1111/bcp.12247) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sabo_2000_reference](drugs/drug_lamivudine/Lamivudine_Sabo2000_reference.md) | — | 1-compartment (no model) | 3 | Sabo JP et al., Pharmacokinetics of nevirapine and lami…, AAPS pharmSci (2000) | [10.1208/ps020101](https://doi.org/10.1208/ps020101) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chandasana_2024_reference](drugs/drug_lamivudine/Lamivudine_Chandasana2024_reference.md) | — | general linear (no model) | 9 (+4 cov.) | Chandasana H et al., Population Pharmacokinetic Modeling of…, Infectious diseases and the… (2024) | [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Legrand_2003_HIV_RNA](drugs/drug_lamivudine/pd_Legrand_2003_HIV_RNA.md) | viral load ← lamivudine · direct Emax (saturable) effect | — | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Legrand_2003_HIV_RNA_2](drugs/drug_lamivudine/pd_Legrand_2003_HIV_RNA_2.md) | viral load ← lamivudine · disease-progression model | — | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lamivudine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` substrate | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` unknown, `ABCC4` substrate, `SLC22A2` substrate, `SLC22A6` substrate | DrugBank actor |
| excretion | liver | `ABCC2` unknown, `ABCC3` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | `ABCC2` unknown, `ABCC3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CMPK1 (substrate), DCK (substrate), DNA (binder), NME1 (substrate), NME2 (substrate), NT5C (substrate), PCYT1A (substrate), PCYT2 (substrate), PGK1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 172 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bekker_2024.pdf` | Bekker A et al., Lamivudine dosing for preterm infants e…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae259](https://doi.org/10.1093/jac/dkae259) | [39092932](https://pubmed.ncbi.nlm.nih.gov/39092932) | The paper reports a population PK model for lamivudine in infants with key parameters (CL/F, V/F) described, but specific numeric parameter estimates (e.g., median CL, V values) are not explicitly listed in the provided evidence text, likely residing in tables or figures not included. |
| `Piana_2014.pdf` | Piana C et al., Covariate effects and population pharma…, British journal of clinical… (2014) | popPK | 10 | [10.1111/bcp.12247](https://doi.org/10.1111/bcp.12247) | [24118070](https://pubmed.ncbi.nlm.nih.gov/24118070) | The abstract provides specific numeric values for clearance and volume of distribution along with their confidence intervals and covariate exponents for lamivudine in a population PK model. |
| `Sabo_2000.pdf` | Sabo JP et al., Pharmacokinetics of nevirapine and lami…, AAPS pharmSci (2000) | popPK | 10 | [10.1208/ps020101](https://doi.org/10.1208/ps020101) | [11741217](https://pubmed.ncbi.nlm.nih.gov/11741217) | The text explicitly reports the quantitative apparent clearance (CL/F) for lamivudine with confidence intervals derived from a population PK modeling analysis. |
| `Tremoulet_2012.pdf` | Tremoulet AH et al., Developmental pharmacokinetic changes o…, Journal of clinical pharmac… (2012) | popPK | 10 | [10.1177/0091270011426563](https://doi.org/10.1177/0091270011426563) | [22180560](https://pubmed.ncbi.nlm.nih.gov/22180560) | The paper is a population PK study of lamivudine in children, but specific quantitative parameter values (clearance, volume) are not listed in the provided abstract text. |
| `Legrand_2003.pdf` | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | popPK | 5 | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) | [12815557](https://pubmed.ncbi.nlm.nih.gov/12815557) | The abstract describes a PK/PD study for lamivudine in HIV patients but does not contain any specific numeric pharmacokinetic parameter values. |

<sub>queue written 2026-10-07T13:08:30.467464+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bekker_2024 | relevant | 10 | 4 | The paper reports a population PK model for lamivudine in infants with key parameters (CL/F, V/F) described, but specific numeric parameter estimates (e.g., median CL, V values) are not explicitly listed in the provided evidence text, likely residing in tables or figures not included. |
| popPK | Di_2026 | irrelevant | 2 | 1 | The paper is a review of BIC/FTC/TAF, and while it lists general PK parameters for Lamivudine (3TC) in Table 1, it is not a PK study with original quantitative modeling or specific parameter derivations for lamivudine as the subject. |
| popPK | Herrera_2021 | relevant | 7 | 4 | The study reports PK concentrations and tissue-to-plasma ratios for lamivudine in humans, but standard systemic disposition parameters (CL, V, t1/2) are absent from the text and detailed numeric values are likely in supplementary tables not provided. |
| popPK | Legrand_2003 | irrelevant | 5 | 0 | The abstract describes a PK/PD study for lamivudine in HIV patients but does not contain any specific numeric pharmacokinetic parameter values. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review of HIV reverse transcriptase inhibitors focused on newer agents (TAF, DOR, RPV, etc.), and while lamivudine is mentioned historically or as a comparator, no quantitative pharmacokinetic parameters for lamivudine are reported. |
| popPK | Souza-Silva_2026 | irrelevant | 0 | 0 | The study evaluates the ecotoxicity of lamivudine on the microalga Chlorella vulgaris (in vitro), reporting only toxicity endpoints like EC50 values and not any pharmacokinetic or population-PK parameters. |
| popPK | Tremoulet_2012 | relevant | 10 | 2 | The paper is a population PK study of lamivudine in children, but specific quantitative parameter values (clearance, volume) are not listed in the provided abstract text. |
| popPK | Uglietti_2012 | irrelevant | 0 | 0 | The paper is a review focusing on emtricitabine and tenofovir, and lamivudine is mentioned only as a comparator for resistance mutations without any PK parameter data. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for delamanid, not lamivudine, although lamivudine is mentioned as a co-administered drug. |
| popPK | Yee_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doravirine, not lamivudine; lamivudine is only mentioned as part of a fixed-dose combination comparator. |
| popPK | Zembower_1998 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral efficacy study where lamivudine is used as a combination agent, not a pharmacokinetic study. |
| popPK | van_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of para-aminosalicylic acid (PAS), with lamivudine mentioned only as a co-administered drug with no significant effect on PAS clearance. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:08 UTC</sub>
