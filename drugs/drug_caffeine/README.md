<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;caffeine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caffeine_Guo2020_reference&quot;,&quot;label&quot;:&quot;Guo_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caffeine/Caffeine_Guo2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Caffeine_Thompson2025_reference&quot;,&quot;label&quot;:&quot;Thompson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caffeine/Caffeine_Thompson2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# caffeine

- **generic name:** caffeine
- **ATC codes:** `D11AX26`, `N06BC01`, `V04CG30`
- **DrugBank:** [DB00201](https://go.drugbank.com/drugs/DB00201) · **PubChem:** [CID 2519](https://pubchem.ncbi.nlm.nih.gov/compound/2519)
- **molar mass:** 194.1906 g/mol (C8H10N4O2) — DrugBank
- **groups:** approved, investigational

## About

Caffeine is a stimulant used to treat breathing problems such as apnea in newborns, and is also used in dermatological and diagnostic preparations. It is widely used and authorised in the European Union, mainly for apnea of prematurity.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60235](https://www.wikidata.org/wiki/Q60235) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| caffeine | parent | 194.191 | C8H10N4O2 | DrugBank | [2519](https://pubchem.ncbi.nlm.nih.gov/compound/2519) | Csajka_2005, Guo_2020, Thompson_2025 |
| ephedrine | metabolite | 165.236 | C10H15NO | PubChem | [9294](https://pubchem.ncbi.nlm.nih.gov/compound/9294) | Csajka_2005 |
| norephedrine | metabolite | 151.209 | C9H13NO | PubChem | [26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934) | Csajka_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:51 | 3:17 | 2/1/0 | 3/0/0 | 0/0/0 | 238,770/15,415 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2020_reference](drugs/drug_caffeine/Caffeine_Guo2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Guo A et al., Population pharmacokinetic study of caf…, Journal of clinical pharmac… (2020) | [10.1111/jcpt.13240](https://doi.org/10.1111/jcpt.13240) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thompson_2025_reference](drugs/drug_caffeine/Caffeine_Thompson2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Thompson EJ et al., Population Pharmacokinetics of Caffeine…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70004](https://doi.org/10.1002/jcph.70004) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Csajka_2005_reference](drugs/drug_caffeine/Caffeine_Csajka2005_reference.md) | — | parent + metabolite (no model) | 5 | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Nonomura_2026_CODS1_PM_Cyto](drugs/drug_caffeine/pd_Nonomura_2026_CODS1_PM_Cyto.md) | Normalized cytosolic mCherry fluorescence intensity (CODS1) ← caffeine · direct Emax (saturable) effect | — | Nonomura T et al., AI-Guided, Journal of the American Che… (2026) | [10.1021/jacs.6c02343](https://doi.org/10.1021/jacs.6c02343) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Nonomura_2026_CODS2_PM_Cyto](drugs/drug_caffeine/pd_Nonomura_2026_CODS2_PM_Cyto.md) | Normalized cytosolic mCherry fluorescence intensity (CODS2) ← caffeine · direct Emax (saturable) effect | — | Nonomura T et al., AI-Guided, Journal of the American Che… (2026) | [10.1021/jacs.6c02343](https://doi.org/10.1021/jacs.6c02343) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Nonomura_2026_IL_2](drugs/drug_caffeine/pd_Nonomura_2026_IL_2.md) | IL-2 secretion ← caffeine · direct Emax (saturable) effect | — | Nonomura T et al., AI-Guided, Journal of the American Che… (2026) | [10.1021/jacs.6c02343](https://doi.org/10.1021/jacs.6c02343) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Rodrigues_2025_Feeding_rate](drugs/drug_caffeine/pd_Rodrigues_2025_Feeding_rate.md) | Feeding rate ← caffeine · direct sigmoid Emax (Hill) effect | — | Rodrigues S et al., Ecotoxicological impacts of caffeine on…, Ecotoxicology (London, Engl… (2025) | [10.1007/s10646-025-02955-z](https://doi.org/10.1007/s10646-025-02955-z) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Rodrigues_2025_Immobilization_mortality](drugs/drug_caffeine/pd_Rodrigues_2025_Immobilization_mortality.md) | Immobilization/mortality ← caffeine · direct sigmoid Emax (Hill) effect | — | Rodrigues S et al., Ecotoxicological impacts of caffeine on…, Ecotoxicology (London, Engl… (2025) | [10.1007/s10646-025-02955-z](https://doi.org/10.1007/s10646-025-02955-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shi_1993_pressor_effect](drugs/drug_caffeine/pd_Shi_1993_pressor_effect.md) | pressor effect ← caffeine · stimulation effect | — | Shi J et al., Pharmacokinetic-pharmacodynamic modelin…, Clinical pharmacology and t… (1993) | [10.1038/clpt.1993.3](https://doi.org/10.1038/clpt.1993.3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=caffeine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), ADORA2B (target), ADORA3 (target), ATM (inhibitor), ITPR1 (inhibitor), NT5E (inhibitor), PDE4A (inhibitor), PDE4B (inhibitor), PDE4D (inhibitor), PIK3CA (inhibitor), PIK3CB (inhibitor), PIK3CD (inhibitor), PRKDC (inhibitor), RYR1 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 381 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_2020.pdf` | Guo A et al., Population pharmacokinetic study of caf…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1111/jcpt.13240](https://doi.org/10.1111/jcpt.13240) | [32737938](https://pubmed.ncbi.nlm.nih.gov/32737938) | The study reports a population pharmacokinetic model for caffeine in premature infants, with explicit numeric values for clearance (0.268 L/h) and volume of distribution (109 L) provided in the text. |
| `Thompson_2024.pdf` | Thompson EJ et al., Population Pharmacokinetics of Caffeine…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2382](https://doi.org/10.1002/jcph.2382) | [37933788](https://pubmed.ncbi.nlm.nih.gov/37933788) | The study is a population PK model for caffeine in neonates, but the abstract describes the model structure without providing any specific numeric parameter values (CL, V, etc.). |
| `Thompson_2025.pdf` | Thompson EJ et al., Population Pharmacokinetics of Caffeine…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70004](https://doi.org/10.1002/jcph.70004) | [39936359](https://pubmed.ncbi.nlm.nih.gov/39936359) | The evidence explicitly reports quantitative population PK parameters (CL, V) for caffeine in infants with HIE. |
| `Csajka_2005.pdf` | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | popPK | 9 | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) | [15752380](https://pubmed.ncbi.nlm.nih.gov/15752380) | The study reports quantitative population PK parameters (CL, V, ka) for caffeine in healthy human subjects using NONMEM, with values clearly stated in the text. |
| `Darakjian_2019.pdf` | Darakjian LI et al., Physiologically Based Pharmacokinetic/P…, Molecular pharmaceutics (2019) | popPK | 9 | [10.1021/acs.molpharmaceut.8b01276](https://doi.org/10.1021/acs.molpharmaceut.8b01276) | [30689395](https://pubmed.ncbi.nlm.nih.gov/30689395) | The paper describes a PBPK model for caffeine in humans, which is relevant, but the evidence provided is only the abstract and lacks the specific quantitative PK parameter values (CL, V, etc.) required for extraction. |
| `Shi_1993.pdf` | Shi J et al., Pharmacokinetic-pharmacodynamic modelin…, Clinical pharmacology and t… (1993) | popPK | 9 | [10.1038/clpt.1993.3](https://doi.org/10.1038/clpt.1993.3) | [8422743](https://pubmed.ncbi.nlm.nih.gov/8422743) | The paper reports a pharmacokinetic-pharmacodynamic model for caffeine in humans, but specific disposition parameters (CL, V) are not explicitly listed in the abstract; only time constants (half-lives of equilibration/tolerance) are provided, suggesting full PK parameters are in the body or figures. |

<sub>queue written 2026-10-07T07:49:19.754203+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brito_2017 | irrelevant | 0 | 0 | The study investigates the vasodilator properties of 2-nitro-1-phenyl-1-propanol, and caffeine is used only as a contractile agent in an in vitro mechanism study, not as the subject drug for PK analysis. |
| popPK | Cadena-Carrera_2023 | irrelevant | 0 | 0 | The study analyzes the chemical composition of guayusa leaves (caffeine content) but does not involve pharmacokinetic modeling or disposition parameters. |
| popPK | Caldas_2023 | irrelevant | 0 | 0 | This is an environmental toxicology study measuring EC50 and reproduction effects in a crustacean, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Darakjian_2019 | relevant | 9 | 1 | The paper describes a PBPK model for caffeine in humans, which is relevant, but the evidence provided is only the abstract and lacks the specific quantitative PK parameter values (CL, V, etc.) required for extraction. |
| popPK | Granados-Soto_1999 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic mechanisms and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for caffeine. |
| popPK | He_2025 | irrelevant | 2 | 0 | This is a review article summarizing population pharmacokinetics in preterm infants, and the provided evidence does not contain specific numeric parameter values, only qualitative descriptions of model types and covariates. |
| popPK | Kahathuduwa_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic/neuroimaging trial focused on cognitive effects, not a pharmacokinetic study reporting disposition parameters for caffeine. |
| popPK | Nonomura_2026 | irrelevant | 0 | 0 | The study uses caffeine as a chemical trigger for protein dissociation systems (CODS) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for caffeine itself, though it briefly mentions general plasma levels/half-life for context. |
| popPK | Papadakis_2025 | irrelevant | 0 | 0 | The study is an ergogenic performance trial measuring jump height and does not report any pharmacokinetic parameters (CL, V, ka) for caffeine. |
| popPK | Rodrigues_2025 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on Daphnia magna assessing toxicity endpoints (LC50, EC50, biomarkers) rather than pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Shi_1993 | relevant | 9 | 4 | The paper reports a pharmacokinetic-pharmacodynamic model for caffeine in humans, but specific disposition parameters (CL, V) are not explicitly listed in the abstract; only time constants (half-lives of equilibration/tolerance) are provided, suggesting full PK parameters are in the body or figures. |
| popPK | Soy_2004 | irrelevant | 3 | 0 | The paper is a methodological simulation study that uses caffeine data only as a secondary validation example, and no specific numeric PK parameters for caffeine are provided in the evidence. |
| popPK | Thompson_2024 | relevant | 10 | 0 | The study is a population PK model for caffeine in neonates, but the abstract describes the model structure without providing any specific numeric parameter values (CL, V, etc.). |
| popPK | Uchida_2024 | irrelevant | 0 | 0 | This is a clinical trial investigating the cognitive and sleep effects of matcha green tea consumption, not a pharmacokinetic study of caffeine. |
| popPK | Wasilewicz_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of a Drosophila neuropeptide in muscle tissue, using caffeine only as a pharmacological tool to induce contractions, not as the subject of pharmacokinetic analysis. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | This is an in-vitro functional study of RYR1 mutations using caffeine as a pharmacological agonist, not a pharmacokinetic study of caffeine disposition. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:49 UTC</sub>
