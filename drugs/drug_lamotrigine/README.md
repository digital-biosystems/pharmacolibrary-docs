<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lamotrigine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamotrigine_Huo2025_reference&quot;,&quot;label&quot;:&quot;Huo_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lamotrigine_Karanam2025_reference&quot;,&quot;label&quot;:&quot;Karanam_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lamotrigine_Methaneethorn2020_reference&quot;,&quot;label&quot;:&quot;Methaneethorn_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Methaneethorn2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# lamotrigine

- **generic name:** lamotrigine
- **ATC codes:** `N03AX09`
- **DrugBank:** [DB00555](https://go.drugbank.com/drugs/DB00555)
- **groups:** approved, investigational

## About

**Description.** Lamotrigine is an antiepileptic drug belonging in the phenyltriazine class. It is used in the treatment of both epilepsy and as a mood stabilizer in bipolar disorder. Lamotrigine is the first medication since lithium granted Food and Drug Administration (FDA) approval for the maintenance treatment of bipolar type I. It is approved for use in more than 30 countries.[A191350]

Lamotrigine has relatively few side-effects and does not require laboratory monitoring. While it is indicated for epilepsy and bipolar disorders, there is evidence that lamotrigine could have some clinical efficacy in certain neuropathic pain states.[A849,A850]

**Indication.** Lamotrigine is indicated as adjunctive therapy for the following seizure types in patients ≥2 years of age: partial seizures, primary generalized tonic-clonic seizures, and generalized seizures due to Lennox-Gastaut syndrome.[L9404]

It is also indicated for the process of conversion to drug monotherapy for those at least 16 years of age or older with partial seizures and currently are receiving treatment with carbamazepine, phenytoin, phenobarbital, primidone, or valproate as the single antiepileptic drug (AED).[L9404]

In addition to the above, lamotrigine is also indicated for the maintenance treatment of bipolar I disorder, delaying the time to mood episodes (which may include mania, hypomania, depression, mixed episodes) in adults at least 18 years or older, who have been treated for acute mood symptoms with standard therapy.[L9404]

Limitations of use

It is important to note that lamotirigine should not be used in the treatment of acute mood episodes, as efficacy has not been established in this context.[L9404]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 00:34 | 15:29 | 2/1/0 | 0/0/0 | 0/0/0 | 91,050/41,146 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 13/3 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: F, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Huo_2025_reference](drugs/drug_lamotrigine/Lamotrigine_Huo2025_reference.md) | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Karanam_2025_reference](drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference.md) | Karanam A et al., Characterization of lamotrigine disposi…, Pharmacotherapy (2025) | [10.1002/phar.4640](https://doi.org/10.1002/phar.4640) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Methaneethorn_2020_reference](drugs/drug_lamotrigine/Lamotrigine_Methaneethorn2020_reference.md) | Methaneethorn J et al., Sources of lamotrigine pharmacokinetic…, Seizure (2020) | [10.1016/j.seizure.2020.07.014](https://doi.org/10.1016/j.seizure.2020.07.014) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lamotrigine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Lamotrigine is excreted in both the urine and feces.[A192027] Following oral administratio…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA1 (inhibitor), ADORA2A (inhibitor), ADRA1A (inhibitor), ADRA2A (inhibitor), ADRB1 (inhibitor), CACNA1E (inhibitor), CHRNA1 (inhibitor), DHFR (inhibitor), DRD1 (inhibitor), DRD2 (inhibitor), DRD2 (target), GABRA1 (inducer), GABRA1 (inhibitor), GABRA1 (target), GRIA1 (inhibitor), HRH1 (target), HTR2A (inhibitor), HTR3A (inhibitor), OPRK1 (inhibitor), SCN11A (blocker), SCN1A (inhibitor).</sub>

## Coverage

- **PubMed hits:** 100 matched, 20 returned
- **screened:** 16  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lamotrigine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
