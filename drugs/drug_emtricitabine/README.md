<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;emtricitabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emtricitabine_Valade2014_reference&quot;,&quot;label&quot;:&quot;Valade_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emtricitabine/Emtricitabine_Valade2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# emtricitabine

- **generic name:** emtricitabine
- **ATC codes:** `J05AF09`, `J05AR03`, `J05AR17`
- **DrugBank:** [DB00879](https://go.drugbank.com/drugs/DB00879) · **PubChem:** [CID 60877](https://pubchem.ncbi.nlm.nih.gov/compound/60877)
- **molar mass:** 247.247 g/mol (C8H10FN3O3S) — DrugBank
- **groups:** approved, investigational

## About

Emtricitabine is an antiretroviral medicine used to treat HIV infection, working as a nucleoside reverse transcriptase inhibitor. It is widely used and is on the WHO list of essential medicines; it is authorised in the European Union for HIV infections and is also available in fixed-dose combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422604](https://www.wikidata.org/wiki/Q422604) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| emtricitabine | parent | 247.247 | C8H10FN3O3S | DrugBank | [60877](https://pubchem.ncbi.nlm.nih.gov/compound/60877) | Chen_2016, Valade_2014 |
| FTC-triphosphate | metabolite | — (mass units only) | — | — | — | — |
| TFV-diphosphate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:05 | 7:10 | 1/0/1 | 2/0/1 | 0/0/0 | 335,586/28,915 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Valade_2014_reference](drugs/drug_emtricitabine/Emtricitabine_Valade2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Valade E et al., Population pharmacokinetics of emtricit…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02058-13](https://doi.org/10.1128/AAC.02058-13) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q305 — no SI value to build from</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.0185)</sub><br><sub>route_to: `human_review`</sub> | [Chen_2016_reference](drugs/drug_emtricitabine/Emtricitabine_Chen2016_reference.md) | — | general linear (no model) | 8 (+1 cov.) | Chen X et al., Model Linking Plasma and Intracellular…, PloS one (2016) | [10.1371/journal.pone.0165505](https://doi.org/10.1371/journal.pone.0165505) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Néant_2019_VL](drugs/drug_emtricitabine/pd_N_ant_2019_VL.md) | HIV viral load ← rilpivirine · disease-progression model | — | Néant N et al., Concentration-response model of rilpivi…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz141](https://doi.org/10.1093/jac/dkz141) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vegas_2025_CD4](drugs/drug_emtricitabine/pd_Vegas_2025_CD4.md) | CD4 + T cells ← emtricitabine · disease-progression model | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vegas_2025_HIV_RNA](drugs/drug_emtricitabine/pd_Vegas_2025_HIV_RNA.md) | HIV-1 RNA ← emtricitabine · disease-progression model | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Hurwitz_2002_HVB](drugs/drug_emtricitabine/pd_Hurwitz_2002_HVB.md) | serum virus load ← emtricitabine triphosphate · indirect response — drug inhibits the production of serum virus load | model (no simulator) | Hurwitz SJ et al., Viral pharmacodynamic model for (-)-bet…, Antiviral chemistry & chemo… (2002) | [10.1177/095632020201300303](https://doi.org/10.1177/095632020201300303) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=emtricitabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DCK (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 132 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Valade_2014.pdf` | Valade E et al., Population pharmacokinetics of emtricit…, Antimicrobial agents and ch… (2014) | popPK | 10 | [10.1128/AAC.02058-13](https://doi.org/10.1128/AAC.02058-13) | [24492366](https://pubmed.ncbi.nlm.nih.gov/24492366) | The study provides specific numeric population pharmacokinetic parameters (clearance, volume) and AUC values for emtricitabine in the abstract text. |
| `Garrett_2018.pdf` | Garrett KL et al., A Pharmacokinetic/Pharmacodynamic Model…, The Journal of pharmacology… (2018) | popPK | 9 | [10.1124/jpet.118.251009](https://doi.org/10.1124/jpet.118.251009) | [30150483](https://pubmed.ncbi.nlm.nih.gov/30150483) | The paper describes a population PK/PD model for emtricitabine, but specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract. |
| `Labarthe_2022.pdf` | Labarthe L et al., Pharmacokinetics and tissue distributio…, The Journal of antimicrobia… (2022) | popPK | 8 | [10.1093/jac/dkab501](https://doi.org/10.1093/jac/dkab501) | [35022753](https://pubmed.ncbi.nlm.nih.gov/35022753) | The study reports pharmacokinetics of emtricitabine in mice using non-compartmental analysis, but specific numeric parameter values are not provided in the text (only TPF trends and qualitative comparisons are described). |
| `Hurwitz_2002.pdf` | Hurwitz SJ et al., Viral pharmacodynamic model for (-)-bet…, Antiviral chemistry & chemo… (2002) | popPK | 5 | [10.1177/095632020201300303](https://doi.org/10.1177/095632020201300303) | [12448689](https://pubmed.ncbi.nlm.nih.gov/12448689) | The paper focuses on a viral pharmacodynamic model in woodchucks and does not report original quantitative pharmacokinetic disposition parameters (CL, V, etc.) for emtricitabine in the provided evidence. |

<sub>queue written 2026-10-07T12:59:09.315148+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aouri_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug rilpivirine, while emtricitabine is only listed as a co-administered medication in the regimen. |
| popPK | Barceló_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elvitegravir and cobicistat; emtricitabine is only mentioned as part of the co-formulation and no PK parameters for it are reported. |
| popPK | Custodio_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elvitegravir, not emtricitabine. |
| popPK | Garrett_2018 | relevant | 9 | 0 | The paper describes a population PK/PD model for emtricitabine, but specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract. |
| popPK | Hurwitz_2002 | irrelevant | 5 | 0 | The paper focuses on a viral pharmacodynamic model in woodchucks and does not report original quantitative pharmacokinetic disposition parameters (CL, V, etc.) for emtricitabine in the provided evidence. |
| popPK | Ibrahim_2021 | irrelevant | 2 | 0 | The study focuses on PK parameters and concentration benchmarks for tenofovir diphosphate (TFV-DP), not emtricitabine. |
| popPK | Labarthe_2022 | relevant | 8 | 2 | The study reports pharmacokinetics of emtricitabine in mice using non-compartmental analysis, but specific numeric parameter values are not provided in the text (only TPF trends and qualitative comparisons are described). |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review of HIV RT inhibitors where emtricitabine is only a component of combination regimens and no standalone quantitative PK parameters (CL, V, etc.) for emtricitabine are reported. |
| popPK | Nyayiru_2020 | irrelevant | 0 | 0 | The paper is a study on the phytochemical composition and antioxidant activity of coconut cotyledons and does not involve the drug emtricitabine or any pharmacokinetic parameters. |
| popPK | Néant_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of rilpivirine, and emtricitabine is only mentioned as part of the co-administered regimen, with no pharmacokinetic parameters reported for it. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bictegravir, not emtricitabine, despite emtricitabine being part of the fixed-dose combination. |
| popPK | Uglietti_2012 | irrelevant | 2 | 0 | This is a narrative review discussing PK/PD features qualitatively but does not provide specific quantitative parameter values in the provided evidence. |
| popPK | Vegas_2025 | relevant | 9 | 2 | The paper reports a population PK model for emtricitabine (FTC), but the specific quantitative PK parameter estimates (CL, V, etc.) are explicitly stated to be in Supplementary Material 1, which is not included in the provided evidence. |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cabotegravir, while emtricitabine is only mentioned as a comparator in the background. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study focuses on the design and synthesis of novel HIV capsid modulators (2-pyridone-bearing phenylalanine derivatives) and does not investigate the pharmacokinetics of emtricitabine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:59 UTC</sub>
