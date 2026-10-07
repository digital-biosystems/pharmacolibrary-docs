<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;ticarcillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticarcillin_Economou2019_reference&quot;,&quot;label&quot;:&quot;Economou_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticarcillin/Ticarcillin_Economou2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ticarcillin

- **generic name:** ticarcillin
- **ATC codes:** `J01CA13`
- **DrugBank:** [DB01607](https://go.drugbank.com/drugs/DB01607) · **PubChem:** [CID 36921](https://pubchem.ncbi.nlm.nih.gov/compound/36921)
- **molar mass:** 384.427 g/mol (C15H16N2O6S2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Ticarcillin is a penicillin antibiotic used to treat bacterial infections such as sepsis, urinary, skin and respiratory tract infections, and Pseudomonas and other gram-negative infections. It has been withdrawn from human use, though it was also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2601832](https://www.wikidata.org/wiki/Q2601832) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ticarcillin | parent | 384.427 | C15H16N2O6S2 | DrugBank | [36921](https://pubchem.ncbi.nlm.nih.gov/compound/36921) | Economou_2019, Höffken_1985, Höffken_1986, Watt_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:09 | 14:29 | 1/2/3 | 1/0/0 | 0/0/0 | 510,817/19,089 | einfracz / qwen3.8-27b | 13 | 0/13 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Economou_2019_reference](drugs/drug_ticarcillin/Ticarcillin_Economou2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Economou CJP et al., Population pharmacokinetics of ticarcil…, International journal of an… (2019) | [10.1016/j.ijantimicag.2019.06.027](https://doi.org/10.1016/j.ijantimicag.2019.06.027) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Höffken_1985_reference](drugs/drug_ticarcillin/Ticarcillin_Hffken1985_reference.md) | — | 1-compartment (no model) | 3 | Höffken G et al., Pharmacokinetics and serum bactericidal…, The Journal of antimicrobia… (1985) | [10.1093/jac/16.6.763](https://doi.org/10.1093/jac/16.6.763) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Höffken_1986_reference](drugs/drug_ticarcillin/Ticarcillin_Hffken1986_reference.md) | — | 1-compartment (no model) | 3 | Höffken G et al., The pharmacokinetics of ticarcillin, cl…, The Journal of antimicrobia… (1986) | [10.1093/jac/17.suppl_c.47](https://doi.org/10.1093/jac/17.suppl_c.47) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Watt_2019_reference](drugs/drug_ticarcillin/Ticarcillin_Watt2019_reference.md) | — | 1-compartment (no model) | 2 | Watt KM et al., Pharmacokinetics of ticarcillin-clavula…, British journal of clinical… (2019) | [10.1111/bcp.13882](https://doi.org/10.1111/bcp.13882) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Davies_1982_reference](drugs/drug_ticarcillin/Ticarcillin_Davies1982_reference.md) | — | 1-compartment (no model) | 0 | Davies BE et al., Pharmacokinetics of ticarcillin in man, European journal of clinica… (1982) | [10.1007/BF00545973](https://doi.org/10.1007/BF00545973) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jacobs_1985_reference](drugs/drug_ticarcillin/Ticarcillin_Jacobs1985_reference.md) | — | 1-compartment (no model) | 0 | Jacobs RF et al., Ticarcillin/clavulanic acid pharmacokin…, The Journal of pediatrics (1985) | [10.1016/s0022-3476(85)80258-4](https://doi.org/10.1016/s0022-3476(85)80258-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zobell_2011_Bactericidal_effect](drugs/drug_ticarcillin/pd_Zobell_2011_Bactericidal_effect.md) | Bactericidal effect ← ticarcillin · model not identified | — | Zobell JT et al., Population pharmacokinetic and pharmaco…, Clinical therapeutics (2011) | [10.1016/j.clinthera.2011.09.010](https://doi.org/10.1016/j.clinthera.2011.09.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zobell_2011_Bacteriostatic_effect](drugs/drug_ticarcillin/pd_Zobell_2011_Bacteriostatic_effect.md) | Bacteriostatic effect ← ticarcillin · model not identified | — | Zobell JT et al., Population pharmacokinetic and pharmaco…, Clinical therapeutics (2011) | [10.1016/j.clinthera.2011.09.010](https://doi.org/10.1016/j.clinthera.2011.09.010) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 111 matched, 75 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Economou_2019.pdf` | Economou CJP et al., Population pharmacokinetics of ticarcil…, International journal of an… (2019) | popPK | 10 | [10.1016/j.ijantimicag.2019.06.027](https://doi.org/10.1016/j.ijantimicag.2019.06.027) | [31279852](https://pubmed.ncbi.nlm.nih.gov/31279852) | The abstract explicitly provides median population pharmacokinetic parameter estimates for clearance, volume of distribution, and intercompartmental clearance in human patients. |
| `Höffken_1985.pdf` | Höffken G et al., Pharmacokinetics and serum bactericidal…, The Journal of antimicrobia… (1985) | popPK | 10 | [10.1093/jac/16.6.763](https://doi.org/10.1093/jac/16.6.763) | [4093345](https://pubmed.ncbi.nlm.nih.gov/4093345) | The abstract provides explicit quantitative PK parameters for ticarcillin, including a 2-compartment model, half-life (74.8 min), and clearance (112 ml/min). |
| `Höffken_1986.pdf` | Höffken G et al., The pharmacokinetics of ticarcillin, cl…, The Journal of antimicrobia… (1986) | popPK | 10 | [10.1093/jac/17.suppl_c.47](https://doi.org/10.1093/jac/17.suppl_c.47) | [3722046](https://pubmed.ncbi.nlm.nih.gov/3722046) | The study reports quantitative disposition parameters (clearance, half-life, model) for ticarcillin in humans with specific numeric values present in the text. |
| `Jacobs_1985.pdf` | Jacobs RF et al., Ticarcillin/clavulanic acid pharmacokin…, The Journal of pediatrics (1985) | popPK | 10 | [10.1016/s0022-3476(85)80258-4](https://doi.org/10.1016/s0022-3476(85)80258-4) | [3998937](https://pubmed.ncbi.nlm.nih.gov/3998937) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for ticarcillin in a one-compartment model. |
| `Watt_2019.pdf` | Watt KM et al., Pharmacokinetics of ticarcillin-clavula…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13882](https://doi.org/10.1111/bcp.13882) | [30710387](https://pubmed.ncbi.nlm.nih.gov/30710387) | The study reports quantitative clearance values for ticarcillin in premature infants. |
| `Wilson_1991.pdf` | Wilson WD et al., Pharmacokinetics and bioavailability of…, Journal of veterinary pharm… (1991) | popPK | 10 | [10.1111/j.1365-2885.1991.tb00807.x](https://doi.org/10.1111/j.1365-2885.1991.tb00807.x) | [2038098](https://pubmed.ncbi.nlm.nih.gov/2038098) | Study reports quantitative PK parameters (CL, Vd) for ticarcillin in foals, but specific numeric values are not explicitly listed in the abstract evidence provided. |
| `Davies_1982.pdf` | Davies BE et al., Pharmacokinetics of ticarcillin in man, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00545973](https://doi.org/10.1007/BF00545973) | [7140806](https://pubmed.ncbi.nlm.nih.gov/7140806) | The study reports quantitative PK parameters (renal clearance 104 ml/min, half-life) and describes a two-compartment model for ticarcillin in humans, although full parameter tables (V, Q, ka) are not fully detailed in the text. |
| `Höffler_1978.pdf` | Höffler D et al., [Pharmacokinetics of ticarcillin in pat…, Deutsche medizinische Woche… (1978) | popPK | 8 | [10.1055/s-0028-1104801](https://doi.org/10.1055/s-0028-1104801) | [350535](https://pubmed.ncbi.nlm.nih.gov/350535) | Reports quantitative half-life and volume of distribution for ticarcillin in human patients. |

<sub>queue written 2026-10-07T11:03:43.368991+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_2019 | irrelevant | 0 | 0 | The study is an in vitro microbiological screening of antibiotic potentiators; it does not report pharmacokinetic disposition parameters (CL, V, etc.) for ticarcillin. |
| popPK | Barker_2014 | irrelevant | 0 | 0 | This is a general review of PKPD modelling approaches in paediatric infectious diseases and does not report specific quantitative pharmacokinetic parameters for ticarcillin. |
| popPK | Bonapace_2002 | irrelevant | 2 | 0 | The study is an in vitro pharmacodynamic model comparing antibiotic effect rather than reporting pharmacokinetic disposition parameters (CL, V) for ticarcillin. |
| popPK | Broeker_2020 | irrelevant | 0 | 0 | The paper investigates pharmacokinetic modeling for teicoplanin and doripenem, not ticarcillin. |
| popPK | Downes_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin, not ticarcillin. |
| popPK | Downes_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin, not ticarcillin. |
| popPK | European_2018 | irrelevant | 0 | 0 | The paper reports on antimicrobial resistance patterns in bacteria, not pharmacokinetic parameters for the drug ticarcillin. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper is an epidemiological report on antimicrobial resistance in bacteria, not a pharmacokinetic study of ticarcillin. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of acute kidney injury potential for 63 drugs and does not contain pharmacokinetic parameters for ticarcillin. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | The paper is a review on AI in dosing timing and does not report any pharmacokinetic parameters for ticarcillin. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis symptoms and does not contain any pharmacokinetic data for ticarcillin. |
| popPK | Joshi_2024 | irrelevant | 0 | 0 | The paper is a computational study on machine learning and molecular docking for Pseudomonas aeruginosa drug discovery; ticarcillin is only mentioned as a background class of antibiotics, and no PK parameters are reported. |
| popPK | Keij_2022 | irrelevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics of clavulanic acid (a beta-lactamase inhibitor), not ticarcillin; ticarcillin is only mentioned as a co-administered partner drug for context. |
| popPK | Kimura_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of arbekacin, vancomycin, and panipenem; ticarcillin is not the subject drug nor a comparator. |
| popPK | Layios_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of temocillin, not ticarcillin. |
| popPK | Massie_2006 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin, while ticarcillin is merely a co-administered comparator agent. |
| popPK | Molina_2025 | irrelevant | 0 | 0 | The paper focuses on the antibacterial activity and mechanism of action of ENOblock against Acinetobacter baumannii, with no pharmacokinetic data for ticarcillin. |
| popPK | Pacifici_2010 | irrelevant | 1 | 3 | The paper is a general review of antibiotics in neonates; while it briefly mentions Vd and t1/2 for ticarcillin, it lacks clearance values, specific compartmental models, or detailed population PK analysis required for the target extraction. |
| popPK | Page-Sharp_2016 | irrelevant | 0 | 0 | The study focuses on ceftriaxone, not ticarcillin. |
| PGx | Quentin_2004 | not_relevant | 0 | 0 | The paper analyzes bacterial resistance rates and phenotypes in Enterobacteriaceae, not human pharmacogenomics or PK/PD parameters. |
| popPK | Schouwenburg_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for clavulanic acid, not ticarcillin (ticarcillin is only mentioned as part of a different drug combination in a cited dataset). |
| popPK | Shekar_2012 | irrelevant | 2 | 0 | This is a study protocol describing planned research rather than a report of results, so no quantitative PK parameters for ticarcillin are present in the evidence. |
| popPK | Sloan_2015 | irrelevant | 0 | 0 | The study models bacterial elimination rates for tuberculosis treatment and uses ticarcillin only as a selective agent in sputum culture media, not as the subject of pharmacokinetic analysis. |
| popPK | Smith_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for clindamycin, not ticarcillin. |
| popPK | Tannous_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of piperacillin-tazobactam, not the pharmacokinetics of ticarcillin. |
| popPK | Wildschut_2012 | irrelevant | 0 | 0 | The paper is a review focused on the effects of ECMO and hypothermia on drug disposition in pediatrics, and does not report specific quantitative pharmacokinetic parameters for ticarcillin in the provided text. |
| popPK | Wilson_1991 | relevant | 10 | 4 | Study reports quantitative PK parameters (CL, Vd) for ticarcillin in foals, but specific numeric values are not explicitly listed in the abstract evidence provided. |
| PGx | Yu_2021 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions (DDI) and transporter inhibition/induction, but does not report pharmacogenomic effects (gene variants) on ticarcillin PK/PD. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The study focuses on the bacterial expression of human estrogen receptors and mentions Timentin (ticarcillin-clavulanate) only as a selection antibiotic, reporting no pharmacokinetic parameters for ticarcillin. |
| popPK | Zinner_1986 | irrelevant | 0 | 0 | The study describes an in vitro model and focuses on the combination of amikacin and azlocillin, without reporting quantitative pharmacokinetic parameters for ticarcillin. |
| popPK | Zobell_2011 | irrelevant | 2 | 0 | The study relies on published PK parameters for modeling rather than reporting original quantitative disposition parameters (CL, V, Q) derived from its own population analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:04 UTC</sub>
