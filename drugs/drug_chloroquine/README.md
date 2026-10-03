<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;chloroquine&quot;}]"></div>

# chloroquine

- **generic name:** chloroquine
- **ATC codes:** `P01BA01`, `P01BB52`
- **DrugBank:** [DB00608](https://go.drugbank.com/drugs/DB00608) · **PubChem:** [CID 2719](https://pubchem.ncbi.nlm.nih.gov/compound/2719)
- **molar mass:** 319.872 g/mol (C18H26ClN3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Chloroquine is an aminoquinolone derivative first developed in the 1940s for the treatment of malaria.[A191655] It was the drug of choice to treat malaria until the development of newer antimalarials such as [pyrimethamine], [artemisinin], and [mefloquine].[A191787] Chloroquine and its derivative [hydroxychloroquine] have since been repurposed for the treatment of a number of other conditions including HIV, systemic lupus erythematosus, and rheumatoid arthritis.[A192432]

**The FDA emergency use authorization for [hydroxychloroquine] and chloroquine in the treatment of COVID-19 was revoked on 15 June 2020.[L14312]**

Chloroquine was granted FDA Approval on 31 October 1949.[L12054]

**Indication.** Chloroquine is indicated to treat infections of _P. vivax_, _P. malariae_, _P. ovale_, and susceptible strains of _P. falciparum_.[L12051] It is also used to treat extraintestinal amebiasis.[L12051]

Chloroquine is also used off label for the treatment of rheumatic diseases,[A191655] as well as treatment and prophylaxis of Zika virus.[A191649,A191652] Chloroquine is currently undergoing clinical trials for the treatment of COVID-19.[A191631]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroquine | parent | 319.872 | C18H26ClN3 | DrugBank | [2719](https://pubchem.ncbi.nlm.nih.gov/compound/2719) | Abd-Rahman_2020, Chotsiri_2022, Karunajeewa_2010, Yao_2021 |
| desethylchloroquine | metabolite | 291.823 | C16H22ClN3 | PubChem | [95478](https://pubchem.ncbi.nlm.nih.gov/compound/95478) | Abd-Rahman_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/2/3 | 0/0/0 | 0/0/0 | not captured | not captured | 42 | 4/0 | 34/8 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: F, Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Chotsiri_2022_reference](drugs/drug_chloroquine/Chloroquine_Chotsiri2022_reference.md) | held back | 1-compartment, oral | 1 | Chotsiri P et al., Pharmacometric and Electrocardiographic…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2665](https://doi.org/10.1002/cpt.2665) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Karunajeewa_2010_reference](drugs/drug_chloroquine/Chloroquine_Karunajeewa2010_reference.md) | held back | 1-compartment, IV | 3 | Karunajeewa HA et al., Pharmacokinetics of chloroquine and mon…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.01269-09](https://doi.org/10.1128/AAC.01269-09) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.941). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Yao_2021_reference](drugs/drug_chloroquine/Chloroquine_Yao2021_reference.md) | held back | 1-compartment, oral | 5 | Yao X et al., Population-based meta-analysis of chlor…, European journal of clinica… (2021) | [10.1007/s00228-020-03032-6](https://doi.org/10.1007/s00228-020-03032-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Abd-Rahman_2020_plasma_samples](drugs/drug_chloroquine/Chloroquine_AbdRahman2020_plasma_samples.md) | — | parent + metabolite (no model) | 8 | Abd-Rahman AN et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Abd-Rahman_2020_whole_blood_samples](drugs/drug_chloroquine/Chloroquine_AbdRahman2020_whole_blood_samples.md) | — | parent + metabolite (no model) | 8 | Abd-Rahman AN et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1893](https://doi.org/10.1002/cpt.1893) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chloroquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `CYP3A5` substrate, `GSTM1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>“…predominantly eliminated in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: ACE2 (modulator), ACKR1 (modulator), GSTA2 (inhibitor), HMGB1 (inhibitor), TLR9 (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2723 matched, 67 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chairat_2018 | irrelevant | not captured | not captured | Chloroquine is only a co-administered comparator drug, and the paper exclusively reports population pharmacokinetic parameters for primaquine. |
| popPK | Commons_2019 | irrelevant | not captured | not captured | The paper is a clinical meta-analysis focusing on hemoglobin changes and hematological outcomes, with no pharmacokinetic data or modeling for chloroquine. |
| popPK | Daher_2019 | irrelevant | not captured | not captured | The study uses non-compartmental analysis to report only AUC and half-life, lacking population/compartmental modeling or key disposition parameters like clearance and volume of distribution. |
| popPK | Salman_2010 | irrelevant | not captured | not captured | The study exclusively models azithromycin pharmacokinetics, with chloroquine only co-administered and lacking any quantitative PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:06 UTC</sub>
